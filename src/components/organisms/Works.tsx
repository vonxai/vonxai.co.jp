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
        <BlockWithHeader Tag="h3" title="サービス">
          <div className="my-5">
            <a
              href="https://backlog.vonxai.co.jp/"
              target="_blank"
              className="block mb-4"
            >
              <div className="rounded overflow-hidden shadow-lg flex sm:flex-col">
                <div
                  className="sm:h-32 sm:w-auto w-72 h-auto flex-none bg-cover bg-no-repeat bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('/assets/images/services/backlog-metrics.webp')]"
                  title="Backlogメトリクス"
                ></div>
                <div className="px-6 py-4">
                  <h4 className="font-bold text-xl mb-2">Backlogメトリクス</h4>
                  <p className="text-gray-700 text-base">
                    プロジェクト管理ツールのBacklogに開発生産性の指標を導入しチームの生産性強化のサポートをします。
                  </p>
                </div>
              </div>
            </a>

            <a
              href="https://ai.vonxai.co.jp/"
              target="_blank"
              className="block"
            >
              <div className="rounded overflow-hidden shadow-lg flex sm:flex-col">
                <div
                  className="sm:h-32 sm:w-auto w-72 h-auto flex-none bg-cover bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden bg-[url('/assets/images/services/character-ai.webp')]"
                  title="キャラクターAI by vonxai inc."
                ></div>
                <div className="px-6 py-4">
                  <h4 className="font-bold text-xl mb-2">キャラクターAI</h4>
                  <p className="text-gray-700 text-base">
                    Live2Dや3DモデルとChatGPTなどのLLMを組み合わせて、オリジナルのキャラクターAIを開発します。
                    <br />
                    リンク先で実際に触ってみましょう。
                  </p>
                </div>
              </div>
            </a>
          </div>
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="実績">
          <ul className="text-xl pl-3 list-['-']">
            <li className="pl-2">
              Google Cloud Platform にてショッピングサイトが乗っている Cloud Run
              のレイテンシ改善
            </li>
            <li className="pl-2">
              MySQL の InnoDB におけるトランザクション処理最適化
            </li>
            <li className="pl-2">
              Amazon Web Services にて Lambda、DynamoDB、SQS
              を利用したWMS(倉庫管理システム)とのつなぎ込み
            </li>
            <li className="pl-2">
              SAP OData API から商品・売上ログの収集とBIツールでの集計
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
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="採用技術">
          <ul className="text-xl pl-3 list-['-']">
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
          <p className="text-xl mb-5">
            ご興味を持たれたらお気軽に
            <a
              href="/contact"
              className="font-semibold mx-1 text-blue-600 hover:underline"
            >
              お問い合せ
            </a>
            ください。
          </p>
        </BlockWithHeader>
      </BlockWithHeader>
      <BlockWithHeader Tag="h2" title="Webエンジニア採用支援">
        <p className="text-xl my-5 break-words">
          エンジニア採用は難しい、希望している職種の応募がなかなか増えないといった声が多く、採用に課題を感じている企業様が多いです。当社はターゲット層の明確化やジョブディスクリプションレビューなどの支援、採用に向けた露出戦略等エンジニア視点での採用戦略を支援します。
          <br />
          また年間数十人の新卒採用・中途採用の技術面接を担当してきた経験をもとに、実際の採用フロー設計やエンジニア採用における技術面接、支援を実施します。
        </p>
        <p className="text-xl mb-5">
          ご興味を持たれたらお気軽に
          <a
            href="/contact"
            className="font-semibold mx-1 text-blue-600 hover:underline"
          >
            お問い合せ
          </a>
          ください。
        </p>
      </BlockWithHeader>
    </>
  );
};
