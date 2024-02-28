import React, { useEffect, useState } from "react";

export const ContactForm = (props) => {
  const { location, pageContext } = props;
  const params = new URLSearchParams(location.search);
  const TurnstileSiteKey = pageContext.site.siteMetadata.TURNSTILE_SITE_KEY;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    setErrorText(getParamErrorText());
    const isSubmitted = params.get("submit") === "true";
    setIsSubmitted(isSubmitted);
    if (isSubmitted) {
      return;
    }
    const head = document.getElementsByTagName("head")[0] as HTMLElement;
    const scriptUrl = document.createElement("script");
    scriptUrl.src = "https://challenges.cloudflare.com/turnstile/v0/api.js";
    head.appendChild(scriptUrl);
  }, []);

  const getParamErrorText = () => {
    const error = params.get("error");
    if (!error) {
      return "";
    }
    switch (error) {
      case "turnstile":
        return "Botチェックに失敗しました。時間をおいて再度お試し下さい。";
      default:
        console.error(`error: ${error} not defined.`);
        return "";
    }
  };

  const callback = `
  window.activateSubmitButton = function () {
    const button = document.getElementById('submitButton');
    button.disabled = false;
  }
`;

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
        {isSubmitted ? (
          <p className="inline-block align-baseline font-bold text-lg text-gray-700 auto-phrase">
            お問い合わせありがとうございました。
          </p>
        ) : (
          <>
            <script dangerouslySetInnerHTML={{ __html: callback }}></script>
            <div
              className="cf-turnstile min-h-22"
              data-sitekey={TurnstileSiteKey}
              data-theme="light"
              data-language="ja"
              data-callback="activateSubmitButton"
            />
          </>
        )}
      </div>
      <div className="flex items-center gap-5 sm:gap-2 flex-col">
        <p className="text-red-700">{errorText}</p>
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
