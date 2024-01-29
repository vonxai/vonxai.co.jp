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

      <div className="rounded overflow-hidden shadow-lg flex sm:flex-col sm:my-10">
        <div
          className="sm:h-32 sm:w-auto w-72 h-auto my-1 flex-none bg-contain bg-no-repeat bg-center rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
          style={{
            backgroundImage: `url('/assets/images/security_action.webp')`,
          }}
          title="Woman holding a mug"
        ></div>
        <div className="px-6 py-4">
          <h4 className="font-bold text-xl mb-2">二つ星宣言</h4>
          <p className="text-gray-700 text-base">
            「SECURITY
            ACTION」は中小企業自らが、情報セキュリティ対策に取組むことを自己宣言する、IPAによって創設された制度です。
          </p>
        </div>
      </div>
    </Base>
  );
};

export default Security;
export { Head } from "../Head";
