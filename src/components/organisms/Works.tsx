import React from "react";
import { BlockWithHeader } from "../atoms/BlockWithHeader";

export const Works = () => {
  return (
    <>
      <BlockWithHeader Tag="h2" title="サービス">
        <div className="my-5 grid grid-cols-2 gap-4 md:grid-cols-1">
          <a
            href="https://backlog.vonxai.co.jp/"
            target="_blank"
            className="block mb-4"
          >
            <div className="rounded-xl shadow-2xl flex flex-col items-center hover:bg-gray-100">
              <div className="h-72 overflow-hidden">
                <img
                  src="/assets/images/services/backlog-metrics.webp"
                  title="Backlogメトリクス"
                  alt="Backlogメトリクス"
                />
              </div>
              <div className="w-full px-6 py-4">
                <p className="text-gray-700 text-xl">開発生産性向上</p>
                <h4 className="font-bold text-2xl mb-2">Backlogメトリクス</h4>
                <p className="text-gray-700 text-xl">
                  プロジェクト管理ツールのBacklogに開発生産性の指標を導入するサービスです。
                  <br />
                  チームの生産性向上、開発効率の可視化、ボトルネック発見などを実現しましょう。
                </p>
              </div>
            </div>
          </a>

          <a href="https://ai.vonxai.co.jp/" target="_blank" className="block">
            <div className="rounded-xl shadow-2xl flex flex-col items-center hover:bg-gray-100">
              <div className="h-72 overflow-hidden">
                <img
                  src="/assets/images/services/character-ai.webp"
                  title="キャラクターAI by vonxai inc."
                  alt="キャラクターAI by vonxai inc."
                />
              </div>
              <div className="w-full px-6 py-4">
                <p className="text-gray-700 text-xl">AIチャットボット</p>
                <h4 className="font-bold text-2xl mb-2">キャラクターAI</h4>
                <p className="text-gray-700 text-xl">
                  Live2Dや3DモデルとChatGPTなどのLLMを組み合わせて、オリジナルのキャラクターAIを開発します。
                  <br />
                  リンク先で実際に触ってみましょう。
                </p>
              </div>
            </div>
          </a>
        </div>
      </BlockWithHeader>
      <BlockWithHeader Tag="h2" title="技術支援">
        <p className="text-xl mt-5 break-words">
          サービスやアプリケーションのパフォーマンス改善やソフトウェア開発での課題の発見・解決に関するコンサルティングを行います。また
          Amazon Web Services や Google Cloud Platform
          を利用したクラウドネイティブなアーキテクチャ設計のレビューや採用技術に関する課題の発見、コスト最適化を支援します。
          <br />
          WordPress や Shopify 、 EC-CUBE
          などを利用したオウンドメディア・オウンドマーケットの導入支援を行います。
          <br />
          個人情報管理やパスワード管理など、ビジネスクリティカルなセキュリティに対するコンサルティングや脆弱性診断を実施します。
        </p>
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
          <p className="text-xl my-5">
            今すぐ
            <a
              href="/contact"
              className="font-semibold mx-1 text-blue-600 hover:underline"
            >
              お問い合せ
            </a>
            いただき、課題解決を始めましょう。今なら無料相談実施中です。
          </p>
        </BlockWithHeader>
      </BlockWithHeader>
    </>
  );
};
