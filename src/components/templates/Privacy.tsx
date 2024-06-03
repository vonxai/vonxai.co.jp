import React from "react";
import Base from "./Base";
import { BlockWithHeader } from "../atoms/BlockWithHeader";

const Mission = ({ pageContext }) => {
  return (
    <Base pageContext={pageContext}>
      <div className="py-10 md:py-0 auto-phrase">
        <p className="text-xl">
          vonxai合同会社(以下「当社」)は、個人情報の保護に関する法律(以下「個人情報保護法」)及び関連する法令、ガイドライン等を遵守するとともに、本基本方針を遵守します。本ポリシーにおける「個人情報」、「個人データ」および「保有個人データ」は個人情報保護法において使用する用語の例によります。
        </p>
        <BlockWithHeader Tag="h2" title="収集する情報">
          <p className="text-xl my-5">
            当社は、事業活動の実施に当たって、以下に記載するものを含む個人情報を取得します。
          </p>
          <ul className="text-xl pl-3 mt-3 list-['-']">
            <li className="pl-2">
              当社製品におけるアカウント情報(メールアドレス、アカウントステータス、年齢など)
            </li>
            <li className="pl-2">
              デバイス情報(デバイスを特定できるデータ、またはデバイスに関するデータ)
            </li>
            <li className="pl-2">
              連絡先情報(名前、メールアドレス、住所、電話番号など)
            </li>
            <li className="pl-2">
              支払い情報(銀行口座、クレジットカード、デビットカードや請求先住所と支払いに関するデータ)
            </li>
            <li className="pl-2">
              当社製品の使用状況データ(製品の閲覧履歴、検索履歴、操作、その他の使用状況データを含む)
            </li>
            <li className="pl-2">
              お客様から当社に提供されるその他の情報(お問い合わせやソーシャルメディアを通じた連絡を含む、当社とのコミュニケーション内容など)
            </li>
          </ul>
        </BlockWithHeader>
        <BlockWithHeader Tag="h2" title="利用目的">
          <p className="text-xl my-5">
            当社は、取得した個人情報を以下に記載する目的の達成に必要な範囲で利用します。このプライバシー
            ポリシーに記載していない目的でお客様の情報を使用する場合は、事前にお客様の同意を求めます。
          </p>
          <ul className="text-xl pl-3 mt-3 list-['-']">
            <li className="pl-2">製品の提供</li>
            <li className="pl-2">製品の維持、向上</li>
            <li className="pl-2">新しい製品の開発</li>
            <li className="pl-2">コンテンツなどをカスタマイズした製品の提供</li>
            <li className="pl-2">パフォーマンスの測定</li>
            <li className="pl-2">お客様とのコミュニケーション</li>
          </ul>
        </BlockWithHeader>
        <BlockWithHeader Tag="h2" title="第三者提供">
          <p className="text-xl my-5">
            当社は、以下に記載する場合を除くほか、あらかじめ本人の同意を得ないで、個人データを第三者に提供しません。
          </p>
          <ul className="text-xl pl-3 mt-3 list-['-']">
            <li className="pl-2">法令に基づく場合</li>
            <li className="pl-2">
              人の生命、身体又は財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき
            </li>
            <li className="pl-2">
              公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき
            </li>
            <li className="pl-2">
              国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
            </li>
            <li className="pl-2">
              当社の提供する製品の利用規約でお客様が同意している場合に該当するとき
            </li>
          </ul>
        </BlockWithHeader>
        <BlockWithHeader Tag="h2" title="委託">
          <p className="text-xl my-5">
            当社は、個人データの取扱いの一部を外部に委託する場合があります。委託を行う場合には、充分な個人データの保護水準を確保していることを条件として委託先を選定し、個人データに関する契約を結んだ上で行います。また、当該委託先における管理については必要かつ適切な監督を行います。
          </p>
        </BlockWithHeader>

        <BlockWithHeader Tag="h2" title="個人データの保護">
          <p className="text-xl my-5">
            当社は、その取り扱う個人データの漏えい、滅失又はき損の防止その他の個人データの安全管理のために以下に記載するものを含む必要かつ適切な措置を講じています。
          </p>
          <ul className="text-xl pl-3 mt-3 list-['-']">
            <li className="pl-2">
              お客様のデータが伝送中に漏洩することのないよう、暗号技術を使用しています。
            </li>
            <li className="pl-2">
              システムへの不正アクセスを防止すべく、情報収集、保存、および処理の実施方法（物理的なセキュリティ対策を含む）の見直しを行っています。
            </li>
            <li className="pl-2">
              個人データにアクセスできる担当者を、情報の処理のためにその情報を必要とする当社社員、委託先に限定しています。
            </li>
            <li className="pl-2">
              個人データはすべて当社「
              <a href="/security" className="text-blue-600 hover:underline">
                情報セキュリティ基本方針
              </a>
              」に則って運用されています。
            </li>
          </ul>
        </BlockWithHeader>

        <BlockWithHeader Tag="h2" title="開示請求手続き">
          <p className="text-xl my-5">
            当社は、保有個人データの開示、保有個人データの内容の訂正、追加もしくは削除、保有個人データの利用の停止もしくは消去または保有個人データの第三者への提供の停止の請求（以下「開示等の請求」といいます。）は、個人情報保護法上認められる範囲で対応いたします。開示等の請求または当社の個人情報の取扱いに関する苦情の申出を行いたい場合は、「
            <a href="/contact" className="text-blue-600 hover:underline">
              お問い合わせ
            </a>
            」までご連絡ください。
          </p>
        </BlockWithHeader>

        <BlockWithHeader Tag="h2" title="ポリシーの変更">
          <p className="text-xl my-5">
            本ポリシーは、法令の改正、事業活動の変化等に応じて、予告なく改定されることがあります。また、ポリシーの最終変更を公開した日付を常に明示します。
          </p>
        </BlockWithHeader>

        <div>
          更新
          <time dateTime="2024-02-28" className="mx-4">
            2024年02月28日
          </time>
        </div>
      </div>
    </Base>
  );
};

export default Mission;
export { Head } from "../Head";
