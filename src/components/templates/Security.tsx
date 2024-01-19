import React from "react";
import Base from "./Base";

const Security = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <div className="py-10 md:py-0 auto-phrase">
        <h2
          id="IDおよびアクセス管理(IAM)"
          className="text-4xl font-semibold md:text-2xl pt-21 -mt-10"
        >
          <a
            href="#IDおよびアクセス管理(IAM)"
            className="before:content-['#'] before:mr-3 before:md:mr-1 before:hover:text-gray-500"
          >
            IDおよびアクセス管理(IAM)
          </a>
        </h2>
        <p className="text-xl my-5">
          組織内のユーザーIDにおける認証・認可を適切に管理することで適切な権限によるオペレーションを実現し、セキュリティインシデントをコントロール可能な状態にします。また、定期的な棚卸しを実施することで、不要なオペレーションの発生を抑えます。
        </p>
        <h2
          id="オブザーバビリティ"
          className="text-4xl font-semibold md:text-2xl pt-21 -mt-10"
        >
          <a
            href="#オブザーバビリティ"
            className="before:content-['#'] before:mr-3 before:md:mr-1 before:hover:text-gray-500"
          >
            オブザーバビリティ
          </a>
        </h2>
        <p className="text-xl my-5">
          テレメトリデータの収集・集約を行い、サプライチェーンやオペレーションを監視することで組織やソフトウェアの高い健全性を保ちます。
        </p>
        <h2
          id="情報セキュリティ教育"
          className="text-4xl font-semibold md:text-2xl pt-21 -mt-10"
        >
          <a
            href="#情報セキュリティ教育"
            className="before:content-['#'] before:mr-3 before:md:mr-1 before:hover:text-gray-500"
          >
            情報セキュリティ教育
          </a>
        </h2>
        <p className="text-xl my-5">
          IPAの一般社員向け情報セキュリティ学習教材などを利用し、年に１度情報セキュリティに対する教育を実施します。
        </p>
      </div>
    </Base>
  );
};

export default Security;
export { Head } from "../Head";
