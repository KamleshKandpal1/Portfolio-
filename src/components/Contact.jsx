import React from "react";
import { mail, phone } from "../assets/assest";

const Contact = () => {
  return (
    <div className="text-[var(--highlight-color)] bg-[var(--accent-third)] p-1.5">
      <p className="text-xl font-semibold">Contact Me</p>
      <div className="flex flex-col gap-y-4 my-[13px]">
        <div className="flex items-center gap-x-4 ">
          <img className="w-7 h-7" src={mail} alt="Mail Icon" />
          <a
            href="mailto:kkandpal06@gmail.com"
            className="text-[var(--highlight-color)]"
          >
            kkandpal06@gmail.com
          </a>
        </div>

        <div className="flex items-center gap-x-4 ">
          <img className="w-7  object-scale-down" src={phone} alt="" />
          <p>+91-971-898-7066</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
