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
