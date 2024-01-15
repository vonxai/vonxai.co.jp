import React from "react";
import { BlockWithHeader } from "../atoms/BlockWithHeader";

export const Profile = () => {
  return (
    <BlockWithHeader Tag="h2" title="代表">
      <p className="text-xl md:text-base mt-5">代表社員</p>
      <p className="text-4xl md:text-2xl font-semibold">夏目 佳明</p>
      <p className="text-xl my-5">
        2011年より株式会社ドワンゴにてエンジニアとして10年勤務。スマホ向けプラットフォームの新規開発、iOSで位置情報を活用したアプリ開発、サーバーサイドでAPI開発、Unityを利用した2Dスマホゲームのテックリード、UI/UX改善プロジェクト、プロダクトマネージャーとしてECシステムの開発とスケールアウトのためのリアーキテクチャを経験。
        <br />
        2022年よりvonxai合同会社を設立し、技術顧問、システム全体のセキュリティや設計・開発・チームビルディング含め、開発に関わる包括的な支援を行う。
      </p>
    </BlockWithHeader>
  );
};
