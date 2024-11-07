import React, { useState } from "react";
import {
  bootstrap,
  c,
  cplus,
  css,
  express,
  git,
  github,
  html,
  js,
  mongodb,
  mysql,
  nodejs,
  php,
  python,
  react,
  react_native,
  tailwind,
} from "../assets/assest";
import { FaChevronDown } from "react-icons/fa6";

const Skills = () => {
  const [isFrontendOpen, setIsFrontendOpen] = useState(true);
  const [isBackendOpen, setIsBackendOpen] = useState(false);
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isDatabaseOpen, setIsDatabaseOpen] = useState(false);
  const [isFamiliarWithOpen, setIsFamiliarWithOpen] = useState(false);

  return (
    <div className="p-4 skill bg-[var(--accent-primary)] text-[var(--highlight-color)] overflow-y-auto  h-[330px] w-full">
      <h1 className="text-base font-normal mb-2">Skills</h1>
      {/* Front-End Section */}
      <div className="mb-2">
        <h1 className="text-base font-semibold flex items-center justify-between my-0.5">
          Front-End{" "}
          <span
            onClick={() => setIsFrontendOpen(!isFrontendOpen)}
            aria-expanded={isFrontendOpen}
            className={`transition-transform duration-300 cursor-pointer ${
              isFrontendOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown />
          </span>
        </h1>
        <div
          className={`overflow-hidden transition-all duration-700 ${
            isFrontendOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          }  gap-x-4 py-1.5 flex items-center`}
        >
          {/* Front-End Skills */}
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={react} alt="React logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              React
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={html} alt="HTML logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Html
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={css} alt="CSS logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Css
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={js} alt="JavaScript logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Js
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={tailwind} alt="Tailwind logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Tailwind
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={bootstrap} alt="Bootstrap logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Bootstrap
            </p>
          </div>
        </div>
      </div>

      {/* Back-End Section */}
      <div className="mb-2">
        <h1 className="text-base font-semibold flex items-center justify-between my-0.5">
          Back-End{" "}
          <span
            onClick={() => setIsBackendOpen(!isBackendOpen)}
            aria-expanded={isBackendOpen}
            className={`transition-transform duration-300 cursor-pointer ${
              isBackendOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown />
          </span>
        </h1>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isBackendOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } gap-x-4 py-1.5 flex items-center`}
        >
          <div className="flex flex-col items-center gap-x-1">
            <img
              className="w-6 h-6 bg-green-950 rounded-full"
              src={nodejs}
              alt="Node.js logo"
            />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              NodeJs
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={express} alt="Express logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Express Js
            </p>
          </div>
        </div>
      </div>

      {/* Database Section */}
      <div className="mb-2">
        <h1 className="text-base font-semibold flex items-center justify-between my-0.5">
          Database{" "}
          <span
            onClick={() => setIsDatabaseOpen(!isDatabaseOpen)}
            aria-expanded={isDatabaseOpen}
            className={`transition-transform duration-300 cursor-pointer ${
              isDatabaseOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown />
          </span>
        </h1>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isDatabaseOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } flex items-center gap-4 py-1.5`}
        >
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={mongodb} alt="MongoDB logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              MongoDB
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={mysql} alt="MySQL logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              MySql
            </p>
          </div>
        </div>
      </div>

      {/* Tools Section */}
      <div className="mb-2">
        <h1 className="text-base font-semibold flex items-center justify-between my-0.5">
          Tools{" "}
          <span
            onClick={() => setIsToolsOpen(!isToolsOpen)}
            aria-expanded={isToolsOpen}
            className={`transition-transform duration-300 cursor-pointer ${
              isToolsOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown />
          </span>
        </h1>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isToolsOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } flex items-center gap-4 py-1.5`}
        >
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={git} alt="Git logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Git
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={github} alt="GitHub logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Github
            </p>
          </div>
        </div>
      </div>

      {/* Familiar With Section */}
      <div className="mb-2">
        <h1 className="text-base font-semibold flex items-center justify-between my-0.5">
          Familiar with{" "}
          <span
            onClick={() => setIsFamiliarWithOpen(!isFamiliarWithOpen)}
            aria-expanded={isFamiliarWithOpen}
            className={`transition-transform duration-300 cursor-pointer ${
              isFamiliarWithOpen ? "rotate-180" : ""
            }`}
          >
            <FaChevronDown />
          </span>
        </h1>
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isFamiliarWithOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
          } flex gap-4 py-2 items-center`}
        >
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={python} alt="Python logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Python
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={cplus} alt="C++ logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              C++
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={c} alt="C logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              C
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={php} alt="PHP logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              Php
            </p>
          </div>
          <div className="flex flex-col items-center gap-x-1">
            <img className="w-6 h-6" src={react_native} alt="PHP logo" />
            <p className="text-[11px] font-normal text-[var(--text-color)]">
              React Native
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
