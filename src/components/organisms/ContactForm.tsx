import React from "react";

export const ContactForm = (props) => {
  const { location, pageContext } = props;
  console.log(props);
  const params = new URLSearchParams(location.search);
  const submitted = params.get("submit") === "true";
  const error = params.get("error");
  const TurnstileSiteKey = pageContext.site.siteMetadata.TURNSTILE_SITE_KEY;

  const showErrors = () => {
    switch (error) {
      case "turnstile":
        return "Botチェックに失敗しました。時間をおいて再度お試し下さい。";
      default:
        console.error(`error: ${error} not defined.`);
        return "";
    }
  };

  return (
    <form method="POST">
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          氏名
          <input
            type="text"
            name="name"
            id="name"
            placeholder="凡才 禅"
            required={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 font-normal focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          メールアドレス
          <input
            type="email"
            name="email"
            id="email"
            placeholder="vonxai@example.com"
            required={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 font-normal focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          お問い合わせ内容
          <textarea
            name="message"
            id="message"
            placeholder=""
            required={true}
            rows={5}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 font-normal focus:outline-none focus:shadow-outline"
          />
        </label>
        {submitted ? (
          <p className="inline-block align-baseline font-bold text-lg text-gray-700 auto-phrase">
            お問い合わせありがとうございました。
          </p>
        ) : (
          <div
            className="cf-turnstile min-h-22"
            data-sitekey={TurnstileSiteKey}
            data-theme="light"
            data-language="ja"
            data-callback="activateSubmitButton"
          />
        )}
      </div>
      <div className="flex items-center gap-5 sm:gap-2 flex-col">
        <p className="text-red-700">{showErrors()}</p>
        <button
          id="submitButton"
          type="submit"
          className="bg-black hover:bg-gray-700 text-white whitespace-nowrap text-xl font-bold py-2 px-16 rounded-md focus:outline-none focus:shadow-outline disabled:bg-gray-300"
          disabled={true}
        >
          送信
        </button>
        <p>
          送信ボタンをクリックすることで、
          <a href="/privacy">プライバシーポリシー</a>に同意したことになります。
        </p>
      </div>
    </form>
  );
};
