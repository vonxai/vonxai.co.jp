import React from "react";

export const ContactForm = (props) => {
  const { location } = props;
  const params = new URLSearchParams(location.search);
  const submitted = params.get("submit") === "true";

  return (
    <form className="" method="POST" data-static-form-name="contact">
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
      <div className="">
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
      </div>
      <div className="flex items-center gap-5 sm:gap-2">
        <button
          type="submit"
          className="bg-black hover:bg-gray-700 text-white whitespace-nowrap text-xl font-bold py-2 px-16 rounded-md focus:outline-none focus:shadow-outline"
        >
          送信
        </button>
        {submitted ? (
          <p className="inline-block align-baseline font-bold text-lg text-gray-700 auto-phrase">
            お問い合わせありがとうございました。
          </p>
        ) : (
          ""
        )}
      </div>
    </form>
  );
};
