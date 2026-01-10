import React, { useState } from "react";
import { BsGithub } from "react-icons/bs";
import { DiMongodb, DiVisualstudio } from "react-icons/di";
import { FaNodeJs, FaReact } from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { SiExpress, SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs, TbStack2Filled } from "react-icons/tb";

const SkillCard = ({ icon: Icon, label }) => (
  <div className="group p-2 flex items-center gap-x-2 bg-[#191919] text-[#e6e6e6] rounded-lg hover:bg-[#1f1f1f] cursor-pointer transition-all">
    <div className="p-2 bg-[#282828] text-[#cccccc] rounded-lg text-base  transition-all group-hover:bg-[#916ce7] group-hover:text-white">
      <Icon />
    </div>

    <p className="text-[12px] font-normal transition-colors group-hover:text-white">
      {label}
    </p>
  </div>
);

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
      <div className="grid grid-cols-3 gap-2 w-full">
        <SkillCard icon={FaReact} label="React" />
        <SkillCard icon={TbBrandNextjs} label="NextJs" />
        <SkillCard icon={IoLogoJavascript} label="JavaScript" />
        <SkillCard icon={FaNodeJs} label="NodeJs" />
        <SkillCard icon={SiExpress} label="ExpressJs" />
        <SkillCard icon={DiMongodb} label="MongoDB" />
        <SkillCard icon={SiTailwindcss} label="Tailwind CSS" />
        <SkillCard icon={BsGithub} label="GitHub" />
        <SkillCard icon={DiVisualstudio} label="Visual Studio" />
      </div>
    </div>
  );
};

export default Skills;
