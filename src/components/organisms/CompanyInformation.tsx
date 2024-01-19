import React from "react";

export const CompanyInformation = () => {
  return (
    <dl className="flex flex-col my-8 text-2xl font-light md:my-2">
      <div className="flex items-center py-4">
        <dt className="flex-1 font-semibold">社名</dt>
        <dd className="flex-3 ml-6">vonxai合同会社</dd>
      </div>
      <div className="flex items-center py-4">
        <dt className="flex-1 font-semibold">本社所在地</dt>
        <dd className="flex-3 ml-6">
          <div className="before:content-['\03012']">150-0043</div>
          東京都渋谷区道玄坂1-16-6 二葉ビル8b
        </dd>
      </div>
      <div className="flex items-center py-4">
        <dt className="flex-1 font-semibold">設立</dt>
        <dd className="flex-3 ml-6">2022年07月18日</dd>
      </div>
      <div className="flex items-center py-4">
        <dt className="flex-1 font-semibold">資本金</dt>
        <dd className="flex-3 ml-6">1百万円</dd>
      </div>
      <div className="flex items-center py-4">
        <dt className="flex-1 font-semibold">所属団体</dt>
        <dd className="flex-3 ml-6">
          <a
            href="https://www.saj.or.jp/"
            target="_blank"
            className="hover:text-gray-500"
          >
            一般社団法人ソフトウェア協会
          </a>
        </dd>
      </div>
    </dl>
  );
};
