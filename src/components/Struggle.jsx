import React from "react";
import exp from "../assets/json/Experience.json";
import edu from "../assets/json/Education.json";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GiLaddersPlatform } from "react-icons/gi";
import { IoSchoolSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Struggle = () => {
  return (
    <div className="text-[#916ce7] bg-[#101010] p-4 h-full flex flex-col items-center space-y-6 rounded-lg">
      <Tabs defaultValue="education" className="w-full">
        <TabsList className="w-full flex gap-2 bg-[#1a1a1a] h-auto p-2">
          <TabsTrigger
            className="w-1/2 p-2 gap-x-1 items-center text-lg active:bg-[#101010]"
            value="education"
          >
            <IoSchoolSharp />
            <span className="text-xs font-medium text-[#999999]">
              {" "}
              Education
            </span>
          </TabsTrigger>
          <TabsTrigger
            className="w-1/2 p-2 gap-x-1 items-center  text-lg active:bg-[#101010]"
            value="experience"
          >
            <GiLaddersPlatform />
            <span className="text-xs font-medium text-[#999999]">
              Experience
            </span>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="education" className="w-full h-auto">
          {edu.map((data, index) => (
            <div className="mt-2" key={index}>
              {/* Education Card */}
              <div className="bg-[#191919] w-full p-3 rounded-xl flex flex-col gap-1">
                <p className="font-medium break-words hyphens-auto flex gap-x-1 items-center">
                  {data.position} |{" "}
                  <span className="text-xs font-medium text-[#999999]">
                    {data.duration}
                  </span>
                </p>
                <p className="text-xs font-medium text-[#999999]">
                  {data.grade} | {data.institution}
                </p>
                <ul className="list-image-none space-y-1 break-words hyphens-auto">
                  {data.accomplishment.map((item, i) => (
                    <li
                      className="text-[10px] font-light text-[#cccccc]"
                      key={i}
                    >
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="text-[11px] font-extralight text-[#cccccc]">
                  {data.grades[0]}{" "}
                  {data?.grades[1] ? ` | ${data?.grades[1]}` : ""}
                </p>

                {/* Dashed Border Overlay */}
              </div>
            </div>
          ))}
        </TabsContent>
        <TabsContent value="experience">
          {exp.map((data, index) => (
            <div className="mt-2" key={index}>
              {/* Experience Card */}
              <div className="bg-[#191919] w-full p-3 rounded-xl flex flex-col gap-1">
                <p className="font-medium break-words hyphens-auto">
                  {data.position}
                </p>
                <p className="text-xs font-medium text-[#999999]">
                  <a className="hover:text-[#916ce7]" href={data.company_link}>
                    {data.company}
                  </a>{" "}
                  | {data.duration}
                </p>
                {data?.company1 && data?.company_link1 && (
                  <p className="text-xs font-medium text-[#999999]">
                    <a
                      className="hover:text-[#916ce7]"
                      href={data.company_link1}
                    >
                      {data.company1}
                    </a>{" "}
                    | {data.duration}
                  </p>
                )}
                <ul className="list-image-none space-y-1 break-words hyphens-auto">
                  {data.responsibilities.map((item, i) => (
                    <li
                      className="text-[10px] font-light text-[#cccccc]"
                      key={i}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Struggle;

// {edu.map((data, index) => (
//   <div key={index}>
//     <h1 className="text-xl font-semibold">{data.title}</h1>
//     <div className="relative mt-2">
//       <div className="text-gray-600 text-xs transform absolute">
//         <p className="text-sm my-1 w-full origin-top-left relative rotate-[270deg] -left-11 top-36">
//           {data.duration}
//         </p>
//       </div>
//       {/* Education Card */}
//       <div className="bg-[var(--accent-third)] w-full px-4 py-2 rounded-xl flex flex-col gap-1.5 -rotate-[10deg] relative z-10">
//         <p className="font-medium break-words hyphens-auto">
//           {data.position}
//         </p>
//         <p className="text-xs text-gray-500">{data.grade}</p>
//         <p className="text-xs text-gray-500">{data.institution}</p>
//         <ul className="list-image-none text-xs space-y-1 break-words hyphens-auto">
//           {data.accomplishment.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//         <ul className="list-image-none text-xs space-y-1 break-words hyphens-auto">
//           {data.grades.map((item, i) => (
//             <li key={i}>{item}</li>
//           ))}
//         </ul>
//         {/* Dashed Border Overlay */}
//         <div className="absolute top-0 left-0 w-full h-full border border-[var(--accent-third)] border-dashed rotate-[10deg] -z-10"></div>
//       </div>
//     </div>
//     {/* Divider Line */}
//     <div className="w-[125%] relative -left-9 h-[1px] bg-[var(--text-color)] mt-2"></div>
//   </div>
// ))}
