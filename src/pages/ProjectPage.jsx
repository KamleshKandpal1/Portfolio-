import React, { useEffect, useState } from "react";
import data from "../assets/json/ProductData.json";
import { TbStack2Filled } from "react-icons/tb";
import { Link } from "react-router-dom";

const ProjectPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="text-white sm:w-[60%] lg:w-[40%]  mx-auto sm:my-10 p-2 sm:p-0 h-full">
      <div className="text-[#916ce7] bg-[#101010] p-4 h-full flex flex-col items-center space-y-4 rounded-lg">
        {/* Heading */}

        <div className="flex items-center justify-center gap-x-1 text-2xl">
          <TbStack2Filled />
          <p className="text-[15px] font-medium text-[#999999]">
            Project Stacks
          </p>
        </div>

        {/* box */}
        {data.map((item, index) => (
          <div
            className="bg-[#141414] w-full h-auto flex flex-col gap-y-2 rounded-lg p-2"
            key={index}
          >
            <div className="p-3 pb-0">
              <img src={item.img} alt="" className="rounded-lg" />
            </div>
            <div className="flex flex-col gap-y-2 p-3">
              {/*  */}
              <div className="flex justify-between items-center">
                <h1 className="text-base font-medium">{item.title}</h1>
                <Link
                  target="_blank"
                  to={item.link}
                  className="bg-[#191919] hover:bg-[#282828] text-[#999999] rounded-2xl text-xs font-medium px-4 py-1"
                >
                  Live
                </Link>
              </div>
              {/*  */}
              <div className="bg-[#141414] border border-[#282828] w-full h-auto flex flex-wrap items-center rounded-lg p-2 gap-x-1 gap-y-2">
                {item.tech.map((items, techindex) => (
                  <div
                    className="flex space-x-1.5 items-center border border-[#282828] px-2 py-1 text-xs font-medium text-[#916ce7] rounded-xl bg-[#191919] cursor-pointer"
                    key={techindex}
                  >
                    <p className="text-[#999999]">{items}</p>
                  </div>
                ))}
              </div>
              {/*  */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectPage;
