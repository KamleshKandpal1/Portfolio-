import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Data from "../assets/json/ProductData.json";
import { back, connect, error, web_not_find } from "../assets/assest";

const ProjectPage = () => {
  const { title } = useParams();
  const history = useNavigate();
  const [iframeError, setIframeError] = useState(false);

  const handleIframeError = () => {
    setIframeError(true); // If iframe fails, set error state to true
  };
  // Find the project by title
  const selectedProject = Data.find((project) => project.title === title);
  const stack = selectedProject.tech.split(", ");
  if (!selectedProject) {
    return (
      <div className="w-full h-full bg-[var(--background-color)] grid place-content-center">
        <div className="text-center">
          {/* Error Image */}
          <img
            src={error}
            className="object-scale-down w-[70%] mt-10 mx-auto rounded-2xl"
            alt="Error"
          />

          {/* Return to Home Button */}
          <button
            className="my-4 px-6 py-2 rounded-2xl text-xl font-medium bg-[var(--accent-fouth)] hover:bg-[var(--accent-third)] text-[var(--text-color)] transition duration-300"
            onClick={() => history("/")}
          >
            🔙 2️⃣ 🏠
          </button>
        </div>
      </div>
    );
  }

  return (
    // <div className=" min-h-screen flex items-center justify-center">
    <div className="lg:w-[80%] md:w-[90%] w-full h-full mx-auto flex items-center justify-center overflow-hidden itim-regular md:mt-2">
      <div className=" w-full h-full grid grid-cols-1 md:grid-cols-[2fr_4fr] gap-6 p-4">
        <div className="h-full grid grid-rows-1 md:grid-rows-[1fr] gap-6 order-2 md:order-1 w-full">
          <div className="bg-[var(--accent-secondary)] p-4">
            <p className="text-2xl mt-2 text-center">Tech Stack</p>
            {stack.map((item, i) => (
              <li
                key={i}
                className="bg-[var(--accent-primary)] p-2 my-2  list-none font-medium text-center px-3 py-2 text-white md:text-lg  shadow-[5px_5px_0_var(--accent-third)] hover:shadow-[3px_3px_0_var(--accent-third)] transition-all duration-300"
              >
                {item}
              </li>
            ))}
          </div>
          <div className="bg-[var(--accent-third)]  p-4">
            <div
              className="flex gap-2 items-center bg-[var(--accent-secondary)] p-2 my-4 list-none text-lg font-medium text-center justify-center shadow-[5px_5px_0_var(--accent-primary)] hover:shadow-[3px_3px_0_var(--accent-primary)] transition-all duration-300 cursor-pointer"
              onClick={() => history("/")}
            >
              <img src={back} className="w-6 h-6" alt="" />
              <p className="">Home</p>
            </div>
            <a
              href={selectedProject.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex gap-2 items-center bg-[var(--accent-primary)] p-2 my-4 list-none text-lg font-medium text-center justify-center shadow-[5px_5px_0_var(--accent-secondary)] hover:shadow-[3px_3px_0_var(--accent-secondary)] transition-all duration-300"
            >
              <img src={connect} className="w-6 h-6" alt="" /> Visit Site
            </a>
          </div>
        </div>
        <div className="h-full grid grid-rows-1 grid-cols-1 md:grid-rows-[2fr_4fr] gap-6 order-1 md:order-2">
          <div className="bg-[var(--accent-third)] p-4 grid place-content-center">
            <h1 className="md:text-6xl text-4xl font-bold text-center text-[var(--highlight-color)]">
              {selectedProject.title}
            </h1>
          </div>
          <div className="bg-[var(--accent-fouth)] md:w-full h-60 md:h-[60vh]">
            <div className="md:p-4 p-2 w-full h-full">
              {!iframeError ? (
                <iframe
                  src={selectedProject.link}
                  title={selectedProject.title}
                  className="w-full h-full"
                  frameBorder="0"
                  allowFullScreen
                  onError={handleIframeError} // Trigger this function on iframe error
                ></iframe>
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center">
                  <img
                    src={web_not_find}
                    className="w-full h-full"
                    alt="Project preview"
                  />
                  <p className="text-center text-gray-500 mt-2">
                    The webpage at {selectedProject.link} might be temporarily
                    down or may have moved permanently.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectPage;
