import React from "react";
import { XIcon } from "../atoms/XIcon";
import { NoteIcon } from "../atoms/NoteIcon";

export const Footer = (props) => {
  return (
    <footer {...props}>
      <div className="flex md:flex-col mb-2 md:mb-4">
        <ul className="w-3/5 md:w-full">
          <li>
            <a href="/privacy">プライバシーポリシー</a>
          </li>
        </ul>
        <ul className="w-2/5 md:w-full md:mt-4 space-x-4">
          <li className="inline-block">
            <a href="https://x.com/vonxai_inc" target="_blank" rel="noopener">
              <XIcon />
            </a>
          </li>
          <li className="inline-block">
            <a href="https://note.com/vonxai/" target="_blank" rel="noopener">
              <NoteIcon />
            </a>
          </li>
        </ul>
      </div>
      <p className="text-sm lg:text-xs">© vonxai inc. All rights reserved.</p>
    </footer>
  );
};
