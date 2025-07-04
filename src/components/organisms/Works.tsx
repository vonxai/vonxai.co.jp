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
      <BlockWithHeader Tag="h2" title="課題解決">
        <p className="text-xl mt-5 break-words">
          事業におけるあらゆる課題解決をサポートします。プロジェクト管理の課題を発見し、的確に解決することで、開発生産性や開発者体験を向上させます。定性調査を通じて問題点を明確化し、事業成果に直結するソリューションを提供します。以下はサポートの一例になります。
        </p>
        <ul className="text-xl pl-3 py-3 list-['-']">
          <li className="pl-2">
            <strong>プロジェクト管理の課題発見と解決：</strong>
            プロジェクトが円滑に進むよう、潜在的な問題を洗い出し、最適な解決策を提案します。
          </li>
          <li className="pl-2">
            <strong>開発生産性の向上：</strong>
            開発プロセスを効率化し、チーム全体の生産性を最大化します。
          </li>
          <li className="pl-2">
            <strong>開発者体験の改善：</strong>
            開発者が働きやすい環境を整え、モチベーションを高めます。
          </li>
        </ul>
        <p className="text-xl">
          詳しくは、弊社の生産性や開発者体験の向上に関する
          <a
            href="https://blog.vonxai.co.jp/category/%E9%96%8B%E7%99%BA%E7%94%9F%E7%94%A3%E6%80%A7/1/"
            className="font-semibold mx-1 text-blue-600 hover:underline"
            target="_blank"
          >
            ブログ記事
          </a>
          をご参照ください。
        </p>
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
          <section className="mb-2">
            <p className="text-xl font-bold">2021年</p>
            <ul className="text-xl pl-3 list-['-']">
              <li className="pl-2">
                Google Cloud Platform にてショッピングサイトが乗っている Cloud
                Run のレイテンシ改善
              </li>
              <li className="pl-2">
                MySQL の InnoDB におけるトランザクション処理最適化
              </li>
              <li className="pl-2">
                Amazon Web Services にて Lambda、DynamoDB、SQS
                を利用したWMS(倉庫管理システム)とのつなぎ込み
              </li>
            </ul>
          </section>
          <section className="mb-2">
            <p className="text-xl font-bold">2022年</p>
            <ul className="text-xl pl-3 list-['-']">
              <li className="pl-2">
                SAP OData API
                から商品・売上ログの収集とBIツール(Tableau)での集計
              </li>
              <li className="pl-2">
                EC-CUBE
                にて決済代行サービス(paygent)とのクレジットカード・コンビニ決済つなぎ込み
              </li>
            </ul>
          </section>
          <section className="mb-2">
            <p className="text-xl font-bold">2023年</p>
            <ul className="text-xl pl-3 list-['-']">
              <li className="pl-2">
                EC-CUBE 公式プラグインのパフォーマンス改善・本体へのパッチ提供
              </li>
              <li className="pl-2">
                WordPress にてクラウドソーシング向けプラグインの開発
              </li>
              <li className="pl-2">
                大型ショッピングモールサイトの脆弱性診断・脆弱性対応
              </li>
              <li className="pl-2">
                国際博覧会のシグネチャーパビリオン公式サイトにおける技術選定・セキュリティ評価・サービス構築運用
              </li>
            </ul>
          </section>
          <section className="mb-2">
            <p className="text-xl font-bold">2024年</p>
            <ul className="text-xl pl-3 list-['-']">
              <li className="pl-2">
                AIスタートアップ向けにLLMやDifyの講義を実施
              </li>
              <li className="pl-2">
                FirebaseとMapboxを利用したスタートアップのバックエンド、フロントエンドの開発支援。BigQueryとLookerを利用したKPIダッシュボードの提供。Webエンジニアの採用支援。
              </li>
            </ul>
          </section>
          <section className="mb-2">
            <p className="text-xl font-bold">2025年</p>
            <ul className="text-xl pl-3 list-['-']">
              <li className="pl-2">
                <a
                  href="https://expo2025-vision.smrj.go.jp/message/detail/?id=378232"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  大阪・関西万博2025「未来航路 – 20XX年を⽬指す挑戦の旅」
                </a>
                参加企業に選出
              </li>
              <li className="pl-2">
                GDALを利用したGISデータの変換、タイルセットサーバーの構築・運用
              </li>
            </ul>
          </section>
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
              express / hono / Next.js / Gatsby.js / Nuxt / Angular
            </li>
          </ul>
          <p className="text-xl my-5">
            まずは
            <a
              href="/contact"
              className="font-semibold mx-1 text-blue-600 hover:underline"
            >
              お問い合せ
            </a>
            から、貴社のお悩みをお聞かせ下さい。
          </p>
        </BlockWithHeader>
      </BlockWithHeader>
    </>
  );
};
