import React from "react";
import avatar from "../assets/Kamlesh.png";
import resume from "../assets/doc/Kamlesh Kandpal Front-End Developer.pdf";
import {
  FaClock,
  FaDownload,
  FaFlag,
  FaGithub,
  FaGlobe,
  FaLinkedin,
  FaLocationDot,
} from "react-icons/fa6";
import { RiGraduationCapFill } from "react-icons/ri";
// import { Link } from "react-router-dom";
const Detail = () => {
  return (
    <div className="w-full h-full bg-[#101010] p-4 flex flex-col items-center space-y-6 rounded-lg">
      {/* image and Details */}
      <div className="flex w-full space-x-5">
        {/* image */}
        <div className="bg-[#916ce7] w-40 rounded-lg p-1 pb-0 overflow-hidden flex justify-center">
          <img
            src={avatar}
            className="sm:h-[100px] h-full sm:w-[100px]"
            alt=""
          />
        </div>
        {/* Name */}
        <div className="flex flex-col space-y-2 w-full justify-center">
          <div className="flex items-center justify-between">
            <div className="bg-[#141414] rounded-3xl p-1 flex sm:space-x-2 space-x-1 outline outline-1 outline-yellow-50 items-center">
              <div className="sm:p-1 p-0.5 rounded-full bg-[#1f1f1f]">
                <div className="sm:p-1.5 p-1 rounded-full bg-[#6dd33d]"></div>
              </div>
              <p className="text-[#999999] font-medium sm:text-sm text-xs">
                Availabel To Work
              </p>
            </div>
            <div className=" flex items-center space-x-2">
              <p className="text-[#e6e6e6] sm:text-sm text-xs font-normal hidden sm:block">
                Resume
              </p>
              <div className="bg-[#282828] text-[#e6e6e6] sm:p-2.5 p-1.5 rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
                <a
                  href={resume}
                  download="Kamlesh Kandpal Front-End Developer.pdf"
                >
                  <FaDownload />
                </a>
              </div>
            </div>
          </div>
          <h1 className="sm:text-2xl text-base font-semibold text-[#e6e6e6]">
            Kamlesh Kandpal
          </h1>
          <p className="text-[#999999] sm:text-sm text-xs font-medium">
            I'm a{" "}
            <span className="text-[#916ce7] font-semibold">
              React Developer
            </span>
          </p>
        </div>
      </div>
      {/* Info */}
      <div className="bg-[#141414] border border-[#282828] w-full h-auto flex flex-wrap items-center rounded-lg p-2 gap-x-1 gap-y-2">
        <div className="flex space-x-1.5 items-center border border-[#282828] px-2 py-1 text-xs font-medium text-[#916ce7] rounded-xl bg-[#191919] cursor-pointer">
          <FaLocationDot />
          <p className="text-[#999999]">India</p>
        </div>
        <div className="flex space-x-1.5 items-center border border-[#282828] px-2 py-1 text-xs font-medium text-[#916ce7] rounded-xl bg-[#191919] cursor-pointer">
          <FaGlobe />
          <p className="text-[#999999]">English & Hindi</p>
        </div>
        <div className="flex space-x-1.5 items-center border border-[#282828] px-2 py-1 text-xs font-medium text-[#916ce7] rounded-xl bg-[#191919] cursor-pointer">
          <FaFlag />
          <p className="text-[#999999]">Web Developer</p>
        </div>
        <div className="flex space-x-1.5 items-center border border-[#282828] px-2 py-1 text-xs font-medium text-[#916ce7] rounded-xl bg-[#191919] cursor-pointer">
          <RiGraduationCapFill />
          <p className="text-[#999999]">MDU University</p>
        </div>
        <div className="flex space-x-1.5 items-center border border-[#282828] px-2 py-1 text-xs font-medium text-[#916ce7] rounded-xl bg-[#191919] cursor-pointer">
          <FaClock />
          <p className="text-[#999999]">IST</p>
        </div>
      </div>
      {/* Links */}
      <div className="flex w-full gap-x-4 items-center justify-between">
        {/* Github */}
        <a
          target="_blank"
          href="https://github.com/KamleshKandpal1"
          className="w-1/2 p-3 bg-[#1f1f1f] flex space-x-2 items-center  text-[#999999] rounded-lg justify-center"
        >
          <FaGithub />
          <p className="text-xs font-medium">Github</p>
        </a>
        {/* Linkedin */}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/kamlesh-kandpal/"
          className="w-1/2 p-3 bg-[#1f1f1f] flex space-x-2 items-center  text-[#999999] rounded-lg justify-center"
        >
          <FaLinkedin />
          <p className="text-xs font-medium">Linkedin</p>
        </a>
      </div>
    </div>
  );
};

export default Detail;
