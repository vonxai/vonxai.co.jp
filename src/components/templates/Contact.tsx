import React from "react";
import Base from "./Base";

const Contact = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <h2 className="mt-6 mb-4 text-2xl md:text-lg">
        どのようにコラボレーション出来るか探ってみましょう。
      </h2>
      <ul className="list-image-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=')">
        <li>業務の自動化・効率化を検討したい</li>
        <li>社内のノウハウや業務内容を一元管理したい</li>
        <li>タスクを見える化して効率的に作業したい</li>
        <li>新規サービス開発をしたいけど何かは初めて良いのか分からない</li>
        <li>開発リソースが不足しているけど事業を加速させたい</li>
        <li>Webサービスのセキュリティに不安がある</li>
      </ul>
    </Base>
  );
};

export default Contact;
export { Head } from "../Head";
