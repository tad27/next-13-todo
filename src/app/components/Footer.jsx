import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer className="footer flex justify-between items-center max-w-4xl mx-auto border-t pt-4 border-slate-900">
      <div className="flex gap-2">
        <a
          className="hover:scale-105 transition-transform"
          href="https://www.linkedin.com/in/tadesse-akele-51314126b/"
          target="_blank"
        >
          <AiFillLinkedin size={20} />
        </a>
        <a
          className="hover:scale-105 transition-transform"
          href="https://github.com/tad27"
          target="_blank"
        >
          <AiFillGithub size={20} />
        </a>
      </div>
      <p className="flex">
        <span>Copyright © 2023 - Made by </span>
        <a
          className="hover:underline underline-offset-4 text-primary font-bold"
          href="https://tadesse.vercel.app"
          target="_blank"
        >
          Tadesse Akele
        </a>
      </p>
    </footer>
  );
}

export default Footer;
