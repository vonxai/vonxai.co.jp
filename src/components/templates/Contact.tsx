import React from "react";
import Base from "./Base";
import { ContactForm } from "../organisms/ContactForm";
import { CompanyList } from "../organisms/CompanyList";

const Contact = ({ location, pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <div className="grid grid-cols-2 md:grid-cols-1 gap-8">
        <div>
          <h2 className="mt-6 mb-4 text-2xl md:text-lg text-gray-500">
            どのようにコラボレーション出来るか探ってみましょう。
          </h2>
          <ul className="list-inside p-5 text-xl md:text-lg bg-zinc-100 rounded-md list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMDAwMDAwIj48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4K')]">
            <li className="p-2 before:mr-2">
              業務の自動化・効率化を検討したい
            </li>
            <li className="p-2 before:mr-2">
              社内のノウハウや業務内容を一元管理したい
            </li>
            <li className="p-2 before:mr-2">
              タスクを見える化して効率的に作業したい
            </li>
            <li className="p-2 before:mr-2">
              コミュニケーションツール(Slack,Chatwork,Discord)の運用・管理を改善したい
            </li>
            <li className="p-2 before:mr-2">
              新規サービス開発をしたいけど何から始めて良いのか分からない
            </li>
            <li className="p-2 before:mr-2">
              開発リソースが不足しているけど事業を加速させたい
            </li>
            <li className="p-2 before:mr-2">
              Webサービスのセキュリティに不安がある
            </li>
          </ul>
        </div>
        <ContactForm location={location} />
      </div>
      <section className="mt-12">
        <h3 className="text-2xl md:text-xl text-center">
          企業規模を問わず、様々な企業様にソリューションを提供。
        </h3>
        <CompanyList darkMode={false} />
      </section>
    </Base>
  );
};

export default Contact;
export { Head } from "../Head";
