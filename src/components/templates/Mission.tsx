import React from "react";
import Base from "./Base";
import { BlockWithHeader } from "../atoms/BlockWithHeader";

const Mission = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <div className="pb-10 md:py-0 auto-phrase">
        <BlockWithHeader Tag="h2" title="ミッション">
          <p className="text-xl mt-5">
            AI時代における情報技術はマンパワーを強化し、様々な格差を広げ、より多様な社会になると考えられます。複雑化する社会、組織、ソフトウェア、サービスと生きる現代。それらの余計なものを削ぎ落とし、本質と向き合う社会を目指していきます。
          </p>
        </BlockWithHeader>
        <BlockWithHeader Tag="h2" title="バリュー">
          <p className="text-xl mt-5">
            ボンサイには、ミッションを実行するために大切にしている５つのバリューがあります。
          </p>
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="只管打坐" ruby="しかんたざ">
          <p className="text-xl">
            ミッションを実行するため、以下を業務基盤としての基本方針とし実践していきます。
          </p>
          <ul className="text-xl pl-3 list-['-']">
            <li className="pl-2">AI拡張型エンジニアリング</li>
            <li className="pl-2">クラウドネイティブアーキテクチャ</li>
            <li className="pl-2">プラットフォームエンジニアリング</li>
          </ul>
          <p id="体制" className="text-xl mt-5">
            代表社員、従業員、外部パートナーが一つとなり、ミッション推進のために積極的にコミュニケーションツールを導入して密な情報共有を行います。
            <br />
            一人ひとりが自律的にミッション・バリューを実行できる組織にするため、業務時間の20%を利用してミッションを実行するための自己の時間として費やします。
          </p>
          <p id="環境整備" className="text-xl mt-5">
            また、実際に基本方針として掲げた内容の具体的な方策を掲げます。
          </p>
          <ul className="text-xl pl-3 list-['-']">
            <li className="pl-2">
              業務効率化・生産性の向上のためのAI拡張型エンジニアリング
            </li>
            <li className="pl-2">
              スケーラビリティやレジリエンスの強化・コスト最適化を主軸にしたクラウドネイティブアーキテクチャ
            </li>
            <li className="pl-2">
              複雑化するサプライチェーンにおけるデリバリ・パイプラインの最適化のためのプラットフォームエンジニアリング
            </li>
          </ul>
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="修証一等" ruby="しゅしょういっとう">
          <blockquote className="text-xl before:content-['“'] before:text-2xl	before:text-gray-400 before:font-bold before:mr-1 after:content-['”'] after:text-2xl after:text-gray-400 after:font-bold after:ml-1">
            世中は何にたとへん水鳥の はしふる露にやとる月影
          </blockquote>
          <p className="text-xl mb-5">
            ミッションに達成というものはありません。常に実践あるのみであり、していきます。
          </p>
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="不立文字" ruby="ふりゅうもんじ">
          <p className="text-xl">
            ミッション推進のためのコミュニケーションとしてテキストによるやり取りは重要ですが、それが全てではありません。課題の本質と向き合うために無駄を無くし、変わりゆく技術・社会の本質と向き合う時間を大切にします。
          </p>
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="行雲流水" ruby="こううんりゅうすい">
          <p className="text-xl">
            世の中の技術は常に変わりゆき、社会も変わりゆきます。常に新しい課題に対応するため、オブザーバビリティの強化による未知の脅威への対応や、定期的に外部パートナーとの技術交流会を開催することでキャッチアップを行います。
          </p>
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="脚下照顧" ruby="きゃっかしょうこ">
          <p className="text-xl">
            ボンサイではソフトウェアや組織のサプライチェーンにおけるSCMアセスメントを実施し、セキュリティ対策の強化を図ります。また、IPAやOWASPが発表しているガイドラインを元に自社や外部パートナーへの情報セキュリティ方針・対策基準を策定、運用していきます。
            <br />
            我々が取り組んでいる
            <a href="/security" className="mx-1 text-blue-600 hover:underline">
              情報セキュリティ基本方針
            </a>
            もご参考下さい。
          </p>
        </BlockWithHeader>
      </div>
      <div className="md:mt-10">
        代表社員 夏目佳明
        <time dateTime="2024-01-11" className="mx-4">
          2024年01月11日
        </time>
      </div>
    </Base>
  );
};

export default Mission;
export { Head } from "../Head";
