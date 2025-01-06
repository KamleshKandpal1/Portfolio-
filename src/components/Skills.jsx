import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import { DiMongodb, DiVisualstudio } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbStack2Filled } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="text-[#916ce7] bg-[#101010] p-4 h-full flex flex-col items-center space-y-6 rounded-lg">
      {/* Heading */}
      <div>
        <div className="flex items-center justify-center gap-x-1 text-xl">
          <TbStack2Filled />
          <p className="text-[12px] font-medium text-[#999999]">My Stacks</p>
        </div>
        <p className="text-[15px] font-normal text-[#e6e6e6] text-center">
          Tech Arsenal
        </p>
      </div>
      {/* Skills */}
      <div className="flex flex-col gap-2 row w-full">
        {/* col-1 */}
        <div className="col-1 w-full gap-2 flex">
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <FaReact />
            </div>
            <p className="text-[12px] font-normal">React</p>
          </div>
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <IoLogoJavascript />
            </div>
            <p className="text-[12px] font-normal">JavaScript</p>
          </div>
        </div>
        {/* col-2 */}
        <div className="col-2 w-full gap-2 flex ">
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <FaNodeJs />
            </div>
            <p className="text-[12px] font-normal">NodeJs</p>
          </div>
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <SiExpress />
            </div>
            <p className="text-[12px] font-normal">ExpressJs</p>
          </div>
        </div>
        {/* col-3 */}
        <div className="col-3 w-full gap-2 flex ">
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <DiMongodb />
            </div>
            <p className="text-[12px] font-normal">MongoDB</p>
          </div>
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <SiTailwindcss />
            </div>
            <p className="text-[12px] font-normal">Tailwind CSS</p>
          </div>
        </div>
        {/* col-4 */}
        {/* <div className="col-4 w-full gap-2 flex ">
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <TbBrandNextjs />
            </div>
            <p className="text-[12px] font-normal">NextJs</p>
          </div>
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <CgCPlusPlus />
            </div>
            <p className="text-[12px] font-normal">C++</p>
          </div>
        </div> */}
        {/* col-5 */}
        <div className="col-5 w-full gap-2 flex ">
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <BsGithub />
            </div>
            <p className="text-[12px] font-normal">Github</p>
          </div>
          <div className="w-1/2 p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer">
            <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-sm">
              <DiVisualstudio />
            </div>
            <p className="text-[12px] font-normal">Visiual Studio</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
