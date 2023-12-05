import React from "react";

export const ContactForm = (props) => {
  return (
    <form className="" action="/">
      <div className="mb-4">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          氏名
          <input
            type="text"
            name="name"
            id="name"
            placeholder="凡才 松"
            required={true}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline"
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
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <div className="">
        <label className="block text-gray-700 text-lg font-bold mb-2">
          問い合わせ内容
          <textarea
            name="message"
            id="message"
            placeholder=""
            required={true}
            rows={5}
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>
      <button
        type="submit"
        className="bg-black hover:bg-gray-700 text-white text-xl font-bold py-2 px-16 rounded-md focus:outline-none focus:shadow-outline"
      >
        送信
      </button>
    </form>
  );
};
