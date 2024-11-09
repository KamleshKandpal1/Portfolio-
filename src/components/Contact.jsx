import React from "react";
import { mail, phone } from "../assets/assest";

const Contact = () => {
  return (
    <div className="text-[var(--highlight-color)] bg-[var(--accent-third)] p-4 h-full w-full">
      <p className="text-xl font-semibold mb-3">Contact Me</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-x-2 ">
          <img className="w-7 h-7" src={mail} alt="Mail Icon" />
          <a
            href="mailto:kkandpal06@gmail.com"
            className="text-[var(--highlight-color)] text-base"
          >
            kkandpal06@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-x-2 break-all">
          <img className="w-7 h-7" src={phone} alt="Call Icon" />
          <p>+91-971-898-7066</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
