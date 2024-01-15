import React from "react";

export const Profile = () => {
  return (
    <>
      <h2
        id="代表"
        className="text-4xl font-semibold md:text-2xl relative pb-7 pt-20 -mt-10 before:content-[''] before:block before:absolute before:left-0	before:bottom-0 before:w-full	before:h-px	before:bg-gray-200 after:content-[''] after:block after:absolute after:left-0	after:bottom-0 after:w-1/3	after:h-px	after:bg-gray-600"
      >
        <a
          href="#代表"
          className="before:content-['#'] before:mr-3 before:md:mr-1 before:hover:text-gray-600"
        >
          代表
        </a>
      </h2>
      <p className="text-xl md:text-base mt-5">代表社員</p>
      <p className="text-4xl md:text-2xl font-semibold">夏目 佳明</p>
      <p className="text-xl my-5">
        2011年より株式会社ドワンゴにてエンジニアとして10年勤務。スマホ向けプラットフォームの新規開発、iOSで位置情報を活用したアプリ開発、サーバーサイドでAPI開発、Unityを利用した2Dスマホゲームのテックリード、UI/UX改善プロジェクト、プロダクトマネージャーとしてECシステムの開発とスケールアウトのためのリアーキテクチャを経験。
        <br />
        2022年よりvonxai合同会社を設立し、技術顧問、システム全体のセキュリティや設計・開発・チームビルディング含め、開発に関わる包括的な支援を行う。
      </p>
    </>
  );
};
