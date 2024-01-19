import React from "react";
import { BlockWithHeader } from "../atoms/BlockWithHeader";

export const Works = () => {
  return (
    <>
      <BlockWithHeader Tag="h2" title="技術支援">
        <p className="text-xl my-5 break-words">
          サービスやアプリケーションのパフォーマンス改善やソフトウェア開発での課題の発見・解決に関するコンサルティングを行います。また
          Amazon Web Services や Google Cloud Platform
          を利用したクラウドネイティブなアーキテクチャ設計のレビューや採用技術に関する課題の発見、コスト最適化を支援します。
          <br />
          WordPress や Shopify 、 EC-CUBE
          などを利用したオウンドメディア・オウンドマーケットの導入支援を行います。
          <br />
          個人情報管理やパスワード管理など、ビジネスクリティカルなセキュリティに対するコンサルティングや脆弱性診断を実施します。
        </p>
        <h3
          id="実績"
          className="text-2xl font-semibold md:text-xl pt-21 -mt-20"
        >
          <a
            href="#実績"
            className="before:content-['##'] before:mr-3 before:md:mr-1 before:hover:text-gray-500"
          >
            実績
          </a>
        </h3>
        <ul className="text-xl my-5 pl-3 list-['-']">
          <li className="pl-2">
            Google Cloud Platform にてショッピングサイトが乗っている Cloud Run
            のレイテンシ改善
          </li>
          <li className="pl-2">
            MySQL の InnoDB におけるトランザクション処理最適化
          </li>
          <li className="pl-2">
            Amazon Web Services にて Lambda、DynamoDB、SQS
            を利用した出荷処理の自動化
          </li>
          <li className="pl-2">
            EC-CUBE
            にて決済代行サービスとのクレジットカード・コンビニ決済つなぎ込み
          </li>
          <li className="pl-2">
            EC-CUBE 公式プラグインのパフォーマンス改善・本体へのパッチ提供
          </li>
          <li className="pl-2">
            WordPress にてクラウドソーシング向けプラグイン開発
          </li>
          <li className="pl-2">
            国際的な博覧会向けサービスや大型ショッピングモールサイトの脆弱性診断・脆弱性対応
          </li>
        </ul>
        <h3
          id="採用技術"
          className="text-2xl font-semibold md:text-xl pt-21 -mt-20"
        >
          <a
            href="#採用技術"
            className="before:content-['##'] before:mr-3 before:md:mr-1 before:hover:text-gray-500"
          >
            採用技術
          </a>
        </h3>
        <ul className="text-xl my-5 pl-3 list-['-']">
          <li className="pl-2">
            Amazon Web Services / Google Cloud Platform / Fastly / Cloudflare
          </li>
          <li className="pl-2">
            PHP / Ruby / Python / Node.js(TypeScript) / Golang / Rust
          </li>
          <li className="pl-2">
            MySQL / DynamoDB / SQS / BigQuery / Firestore / Redis
          </li>
          <li className="pl-2">
            Smarty / Laravel / Ruby on Rails / Padrino / Django / Flask /
            express / hono / Next.js / Gatsby.js / Nuxt
          </li>
        </ul>
      </BlockWithHeader>
      <BlockWithHeader Tag="h2" title="エンジニア採用支援">
        <p className="text-xl my-5 break-words">
          エンジニア採用は難しい、希望している職種の応募がなかなか増えないといった声が多く、採用に課題を感じている企業様が多いです。弊社ではターゲット層の明確化やジョブディスクリプションレビューなどの支援、採用に向けた露出戦略等エンジニア視点での採用戦略を支援します。
          <br />
          また年間数十人の新卒採用・中途採用の技術面接を担当してきた経験をもとに、実際の採用フロー設計やエンジニア採用における技術面接、支援を実施します。
        </p>
      </BlockWithHeader>
    </>
  );
};
