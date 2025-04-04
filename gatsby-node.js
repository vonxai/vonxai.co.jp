const path = require("path");
const fs = require("fs");

const resolveImportedComponent = async (importPath, baseDir) => {
  try {
    const fullPath = path.resolve(baseDir, importPath);
    const content = await fs.promises.readFile(fullPath + '.tsx', 'utf8');
    return content;
  } catch (error) {
    console.error(`Error reading imported component ${importPath}:`, error);
    return '';
  }
};

const convertTsxToMarkdown = async (content, filePath) => {
  // インポートされているコンポーネントを解決
  const baseDir = path.dirname(filePath);
  const importPromises = [];
  const importRegex = /import\s+(?:{\s*)?([A-Za-z0-9_,\s]+)(?:\s*})?\s+from\s+["']([^"']+)["'];/g;
  let importedContent = '';
  
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    const [, components, importPath] = match;
    if (!importPath.startsWith('@') && !components.startsWith('React') && !components.startsWith('Base') && !components.startsWith('Header')  && !components.startsWith('TopHeader') && !components.startsWith('BlockWithHeader') && !components.startsWith('ContactForm') && !components.startsWith('Footer')) {
      importPromises.push(resolveImportedComponent(importPath, baseDir));
    }
  }

  // インポートされたコンポーネントの内容を取得
  const importedContents = await Promise.all(importPromises);
  importedContent = importedContents.join('\n');

  // コンポーネントの内容を解析
  const extractTextContent = (str) => {
    const cleanTextContent = str
      .replace(/\{\/\*[\s\S]*?\*\/\}/g, '') // コメントを削除
      .replace(/import[^\n]+/g, '') // importステートメントを削除
      .replace(/export[^\n]+/g, '') // exportステートメントを削除
      .replace(/const[^\n]+/g, '') // コンポーネント定義を削除
      .replace(/return\s*\(/g, '') // return文を削除
      .replace(/[\)\}]\s*;/g, '') // 終了の括弧とセミコロンを削除
      .replace(/(^|\n)(\s*)(?!.*<[^>]+>)([^\n]+)/g, '$3') // タグ以外の行は詰める
      .replace(/className=["'{][^"'}]*["'}]/g, '') // classNameプロパティを削除
      .replace(/src=["'{][^"'}]*["'}]/g, '') // srcプロパティを削除
      .replace(/alt=["'{][^"'}]*["'}]/g, '') // altプロパティを削除
      // .replace(/title=["'{]([^"'}]*)["'}]/g, '$1') // titleプロパティを削除
      .replace(/aria-label=["'{][^"'}]*["'}]"/g, '') // aria-labelプロパティを削除
      .replace(/(<li[^>]*>)\n\s*/g, '$1') // リストを変換
      .replace(/<dt >/g, '### ') // リストを変換
      .replace(/<imgtitle="(.+)"\/>/g, '$1') // imgを変換
      .replace(/\n*\s*<a[^>]*>(.*)\n*\s*<\/a>/g, '$1') // aを処理
      .replace(/\{.*?\}/g, '') // JSX式を削除
    
      console.log(cleanTextContent)
    const convertedTextContent = convertHeadings(cleanTextContent);

    // テキストのみの行を抽出して整形
    return convertedTextContent
      .split('\n')
      .map(line => {
        const trimmedLine = line.trim();
        if (!trimmedLine) return ''; // 空行
        if (/[<>]/.test(line)) {
          // タグを含む行の処理
          return line
            .replace(/<BlockWithHeader Tag="([^"]*)" title="([^\s]*)"[^>]*>/g, (match, p1, p2) => {
              switch(p1) {
                case 'h2':
                  return `### ${p2}`;
                case 'h3':
                  return `#### ${p2}`;
                default:
                  throw new Error(`Unknown tag: ${p1}`)
              }
            }) // Blockを変換
            .replace(/<li[^>]*>/g, '- ') // リストを変換
            .replace(/<[^>]*/g, '') // その他のタグを削除
            .replace(/>/g, '') // その他のタグを削除
            .trim();
        }
        // テキストのみの行は前後の空白を削除
        return trimmedLine;
      })
      .filter(line => line.length > 0) // 空行を削除
      .join('\n') //改行で結合
      .replace(/(\n[^-]*\n)-/g, '$1\n-') // リストの前後を改行する
      .replace(/(\n-.*\n)([^-])/g, '$1\n$2')
      .replace(/([^\n])\n#([^\n]+)\n/g, '$1\n\n#$2\n')
      .replace(/#([^\n]+)\n([^\n])/g, '#$1\n\n$2'); // 見出しに改行を入れる
  };

  // h1-h6タグを見つけてMarkdownの見出しに変換
  const convertHeadings = (str) => {
    return str.replace(/<h([1-6])[^>]*>(.*)\n*\s*<\/h\1>/g, (_, level, text) => {
      return `${'#'.repeat(level)} ${text.trim()}`;
    });
  };

  // メインコンテンツとインポートされたコンテンツを結合して処理
  const combinedContent = content + '\n' + importedContent;
  
  // テキストコンテンツを抽出
  let markdown = extractTextContent(combinedContent);

  return moveHeading(markdown);
};

const extractPageContent = async (page, component) => {
  try {
    const content = await fs.promises.readFile(component, 'utf8');
    const markdown = await convertTsxToMarkdown(content, component);
    return `## ${page.path}\n\n${markdown}\n\n`;
  } catch (error) {
    console.error(`Error reading file for path ${page.path}:`, error);
    return '';
  }
};

const moveHeading = (str) => {
  const lines = str.split('\n')
  const h1 = lines.filter(line => line.startsWith('# '))
  const others = lines.filter(line => !line.startsWith('# '))
  return [...h1, '\n', ...others].join('\n')
}

exports.onPostBuild = async ({ store }) => {
  const { pages } = store.getState();
  const contentPromises = Array.from(pages.values()).map(page => 
    extractPageContent(page, page.component)
  );
  
  const contents = await Promise.all(contentPromises);
  const combinedContent = contents.join('');

  await fs.promises.writeFile('public/llms.txt', moveHeading(combinedContent));
  console.log('Generated llms.txt with all page contents');
};

exports.createPages = async ({ graphql, actions: { createPage } }) => {
  const site = await graphql(`
    query SEO {
      site {
        siteMetadata {
          title: title
          description: description
          siteUrl: siteUrl
        }
      }
    }
  `);
  const meta = site.data.site.siteMetadata;
  const options = {
    TURNSTILE_SITE_KEY: process.env.TURNSTILE_SITE_KEY,
  };

  createPage({
    path: `/`,
    component: path.resolve("./src/components/templates/Home.tsx"),
    context: {
      site: site.data.site,
    },
  });

  createPage({
    path: `/404`,
    component: path.resolve("./src/components/templates/404.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "404 Not Found." },
        },
      },
    },
  });

  createPage({
    path: `/company`,
    component: path.resolve("./src/components/templates/Company.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "会社概要" },
        },
      },
    },
  });

  createPage({
    path: `/service`,
    component: path.resolve("./src/components/templates/Business.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "事業概要" },
        },
      },
    },
  });

  createPage({
    path: `/mission`,
    component: path.resolve("./src/components/templates/Mission.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "ミッション・バリュー" },
        },
      },
    },
  });

  createPage({
    path: `/careers`,
    component: path.resolve("./src/components/templates/Careers.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...options,
          ...{ subtitle: "採用情報" },
        },
      },
    },
  });

  createPage({
    path: `/contact`,
    component: path.resolve("./src/components/templates/Contact.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...options,
          ...{ subtitle: "お問い合わせ" },
        },
      },
    },
  });

  createPage({
    path: `/security`,
    component: path.resolve("./src/components/templates/Security.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "情報セキュリティ基本方針" },
        },
      },
    },
  });

  createPage({
    path: `/privacy`,
    component: path.resolve("./src/components/templates/Privacy.tsx"),
    context: {
      site: {
        siteMetadata: {
          ...meta,
          ...{ subtitle: "プライバシーポリシー" },
        },
      },
    },
  });
};
