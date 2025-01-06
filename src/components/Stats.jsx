import React from "react";
import { FaFlag } from "react-icons/fa6";
import { LuUserCog } from "react-icons/lu";
import NumberTicker from "@/components/ui/number-ticker";

const Stats = () => {
  return (
    <div className="text-[#916ce7] h-full flex items-center space-x-2">
      {/* Heading */}
      <div className="w-1/2 flex flex-col items-center bg-[#101010] py-4 px-2 gap-2 rounded-lg">
        <div className="flex items-center gap-x-1">
          <p className="text-[#e6e6e6] text-5xl font-normal text-center">
            <NumberTicker value={6} decimalPlaces={0} />
          </p>
          <p className="text-3xl font-medium">+</p>
        </div>
        <div className="flex items-center justify-center gap-x-1 text-xs px-6 py-1 bg-[#141414] rounded-2xl w-full">
          <FaFlag />
          <p className="text-[10px] font-medium text-[#999999]">Projects</p>
        </div>
      </div>
      <div className="w-1/2 flex flex-col items-center bg-[#101010] py-4 px-2 gap-2 rounded-lg">
        <div className="flex items-center gap-x-1">
          <p className="text-[#e6e6e6] text-5xl font-normal text-center">
            <NumberTicker value={1} decimalPlaces={0} />
          </p>
          <p className="text-3xl font-medium">+</p>
        </div>
        <div className="flex items-center justify-center gap-x-1 text-xs px-6 py-1 bg-[#141414] rounded-2xl w-full">
          <LuUserCog />
          <p className="text-[10px] font-medium text-[#999999]">
            Year Expertise
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
