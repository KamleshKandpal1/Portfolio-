import React from "react";
import { FaCrown, FaEnvelope, FaPhone } from "react-icons/fa6";

const Contact = () => {
  return (
    <div class="text-[#916ce7] bg-[#101010] p-4 h-full flex flex-col items-center space-y-6 rounded-lg">
      <div class="bg-[#1f1f1f] text-[#916ce7] text-2xl rounded-full p-3">
        <FaCrown />
      </div>
      <div class="flex flex-col space-y-2 items-center">
        <p class="text-xl font-semibold text-[#e6e6e6]">Let's Work Together</p>
        <p class="text-sm font-medium text-[#999999]">
          Let's Make Magic Happen Together!
        </p>
      </div>

      <div className="w-full flex items-center justify-between sm:gap-0 sm:gap-y-4 gap-2 sm:flex-col">
        {/* Email */}
        <a
          href="mailto:kkandpal06@gmail.com"
          className="w-1/2 sm:w-full flex items-center gap-x-2 bg-[#1f1f1f] sm:p-2.5 p-2 text-center rounded-lg  text-[#916ce7] justify-center text-lg"
        >
          <FaEnvelope />
          <span className="text-[#999999] text-[13px] font-medium">
            Email Me
          </span>
        </a>
        {/* Call */}
        <a
          href="tel:9718987066"
          className="w-1/2 sm:w-full flex items-center gap-x-2 bg-[#1f1f1f] sm:p-2.5 p-2 text-center rounded-lg  text-[#916ce7] justify-center text-lg"
        >
          <FaPhone />{" "}
          <span className="text-[#999999] text-[13px] font-medium">
            Make a Call
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
