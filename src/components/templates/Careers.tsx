import React from "react";
import Base from "./Base";
import { BlockWithHeader } from "../atoms/BlockWithHeader";

const Careers = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <BlockWithHeader Tag="h2" title="募集要項">
        <BlockWithHeader Tag="h3" title="パートナー">
          <p className="text-xl break-words">主な業務</p>
          <ul className="text-xl pl-3 list-['-']">
            <li className="pl-2">クライアントとの折衝</li>
            <li className="pl-2">要件定義・機能仕様の策定</li>
            <li className="pl-2">品質保証</li>
          </ul>
          <p className="text-xl mt-5 break-words">歓迎スキル・経験等</p>
          <ul className="text-xl pl-3 list-['-']">
            <li className="pl-2">ソフトウェア開発の知識、経験</li>
            <li className="pl-2">自分でビジネスを持つという意識</li>
          </ul>
        </BlockWithHeader>
        <BlockWithHeader Tag="h3" title="ソフトウェアエンジニア">
          <p className="text-xl break-words">主な業務</p>
          <ul className="text-xl pl-3 list-['-']">
            <li className="pl-2">Webシステム・アプリ開発</li>
            <li className="pl-2">UI/UX設計</li>
          </ul>
          <p className="text-xl mt-5 break-words">歓迎スキル・経験等</p>
          <ul className="text-xl pl-3 list-['-']">
            <li className="pl-2">ソフトウェア開発の知識、経験</li>
            <li className="pl-2">OSSプロジェクトへのコミット経験</li>
            <li className="pl-2">技術イベントでの登壇経験</li>
          </ul>
        </BlockWithHeader>
      </BlockWithHeader>
    </Base>
  );
};

export default Careers;
export { Head } from "../Head";
