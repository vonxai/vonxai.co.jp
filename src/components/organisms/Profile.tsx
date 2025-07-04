import React from "react";
import { BlockWithHeader } from "../atoms/BlockWithHeader";

export const Profile = () => {
  return (
    <BlockWithHeader Tag="h2" title="メンバー">
      <div className="">
        <p className="text-xl md:text-base mt-5">代表社員</p>
        <p className="text-4xl md:text-2xl font-semibold">夏目 佳明</p>
        <img
          src={`/assets/images/profile-natsume.webp`}
          alt="夏目 佳明プロフィール画像"
          title="夏目 佳明プロフィール画像"
          className="object-cover h-80 my-2 rounded-xl"
        />
        <p className="text-xl">
          2011年より株式会社ドワンゴにてエンジニアとして10年勤務。スマホ向けプラットフォームの新規開発、iOSで位置情報を活用したアプリ開発、サーバーサイドでAPI開発、Unityを利用した2Dスマホゲームのテックリード、UI/UX改善プロジェクト、プロダクトマネージャーとしてECシステムの開発とスケールアウトのためのリアーキテクチャを経験。2022年よりvonxai合同会社を設立し、技術顧問、システム全体のセキュリティや設計・開発・チームビルディング含め、開発に関わる包括的な支援を行う。
        </p>
        <p className="text-xl break-words mt-2">保有資格</p>
        <ul className="text-xl pl-3 list-['-']">
          <li className="pl-2">
            <a
              href="https://coursera.org/share/1e3c2a782c49faaa452893e413114e3c"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener"
            >
              Google Cybersecurity
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-10">
        <p className="text-4xl md:text-2xl font-semibold">小松 武弘</p>
        <img
          src={`/assets/images/profile-komatsu.webp`}
          alt="小松 武弘プロフィール画像"
          title="小松 武弘プロフィール画像"
          className="object-cover h-80 my-2 rounded-xl"
        />
        <p className="text-xl">
          株式会社ドワンゴに入社後、ニコニコ動画の基盤システム開発やプライベートクラウドでのインフラ・ネットワーク構築を多数経験。2019年6月より合同会社DMM.com
          に入社し資産や購買の管理、従業員の社内プロセスの改善等を推進。2021年5月よりメルカリにて従業員体験の向上や業務プロセスの改革を手掛ける。2023年３月よりデジタル庁に入庁しシステム部門の立ち上げや官民一体となる省庁間のコミュニケーションと業務システムの構築に従事している。2024年7月に観光事業を手掛ける株式会社ESTAYを設立。
        </p>
      </div>
    </BlockWithHeader>
  );
};
