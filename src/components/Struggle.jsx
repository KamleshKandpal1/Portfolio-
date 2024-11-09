import React from "react";
import exp from "../assets/json/Experience.json";
import edu from "../assets/json/Education.json";
import { tape, tape1 } from "../assets/assest";

const Struggle = () => {
  return (
    <div className="p-4 bg-purple-400 flex w-full overflow-y-auto overflow-x-hidden h-full skill z-0">
      <div className="w-1/12 relative min-h-fit"></div>
      <div className="w-11/12 border-l pl-4 flex flex-col gap-2 relative min-h-fit">
        {exp.map((data, index) => (
          <div key={index}>
            <h1 className="text-xl font-semibold">{data.title}</h1>
            <div className="relative mt-2">
              <div className="text-gray-600 text-xs transform absolute">
                <p className="text-sm my-1 w-full origin-top-left relative rotate-[270deg] -left-11 top-32">
                  {data.duration}
                </p>
              </div>
              {/* Experience Card */}
              <div className="bg-[var(--accent-secondary)] w-full px-4 py-2 rounded-xl flex flex-col gap-1.5 -rotate-[10deg] relative z-10">
                <p className="font-medium break-words hyphens-auto">
                  {data.position}
                </p>
                <p className="text-xs text-gray-500">{data.company}</p>
                <ul className="list-image-none text-xs space-y-1 break-words hyphens-auto">
                  {data.responsibilities.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {/* Dashed Border Overlay */}
                <div className="absolute top-0 left-0 w-full h-full border border-[var(--accent-secondary)] border-dashed rotate-[10deg] -z-10"></div>
                <img
                  src={tape}
                  className="w-20 absolute -right-5 top-2 rotate-45"
                  alt=""
                />
              </div>
            </div>
            {/* Divider Line */}
            <div className="w-[125%] relative -left-9 h-[1px] bg-[var(--text-color)] mt-2"></div>
          </div>
        ))}
        {edu.map((data, index) => (
          <div key={index}>
            <h1 className="text-xl font-semibold">{data.title}</h1>
            <div className="relative mt-2">
              <div className="text-gray-600 text-xs transform absolute">
                <p className="text-sm my-1 w-full origin-top-left relative rotate-[270deg] -left-11 top-36">
                  {data.duration}
                </p>
              </div>
              {/* Education Card */}
              <div className="bg-[var(--accent-third)] w-full px-4 py-2 rounded-xl flex flex-col gap-1.5 -rotate-[10deg] relative z-10">
                <p className="font-medium break-words hyphens-auto">
                  {data.position}
                </p>
                <p className="text-xs text-gray-500">{data.grade}</p>
                <p className="text-xs text-gray-500">{data.institution}</p>
                <ul className="list-image-none text-xs space-y-1 break-words hyphens-auto">
                  {data.accomplishment.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <ul className="list-image-none text-xs space-y-1 break-words hyphens-auto">
                  {data.grades.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                {/* Dashed Border Overlay */}
                <div className="absolute top-0 left-0 w-full h-full border border-[var(--accent-third)] border-dashed rotate-[10deg] -z-10"></div>
                <img
                  src={tape1}
                  className="w-20 absolute -right-5 top-2 rotate-45"
                  alt=""
                />
              </div>
            </div>
            {/* Divider Line */}
            <div className="w-[125%] relative -left-9 h-[1px] bg-[var(--text-color)] mt-2"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Struggle;
