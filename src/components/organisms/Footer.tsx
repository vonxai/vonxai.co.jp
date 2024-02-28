import React from "react";

export const Footer = (props) => {
  return (
    <footer {...props}>
      <ul className="mb-2">
        <li>
          <a href="/privacy">プライバシーポリシー</a>
        </li>
      </ul>
      <p className="text-sm lg:text-xs">© vonxai inc. All rights reserved.</p>
    </footer>
  );
};
