import React from "react";
import avatar from "../assets/Kamlesh.png";
import resume from "../assets/doc/Kamlesh Kandpal Front-End Developer.pdf";
import { background, download, github, linkedin } from "../assets/assest";
import { Link } from "react-router-dom";
const Detail = () => {
  return (
    <div className="w-full h-full bg-[var(--accent-secondary)] relative z-0">
      <div
        className="flex w-full h-full z-10"
        // style={{ background: background }} // Dynamically setting the background here
      >
        <div className="sm:w-[60%] w-[50%] flex flex-col gap-1 justify-end p-4 text-[var(--highlight-color)]">
          <h2 className="text-3xl font-semibold ">Kamlesh Kandpal</h2>
          <p className="text-lg font-semibold">Front-End Developer</p>
          <p className="text-base font-normal">Delhi, India</p>
        </div>
        <div className="relative md:w-[40%] w-[50%] sm:right-3 flex justify-center">
          <img src={avatar} className=" relative w-full sm:w-[60%]" alt="" />
        </div>
        <div className="flex flex-col gap-4 items-center absolute bottom-2 right-2">
          <Link to="https://github.com/KamleshKandpal1">
            <img className="w-6 object-scale-down" src={github} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/in/kamlesh-kandpal-3aa38523b/">
            <img className="w-6 object-scale-down" src={linkedin} alt="" />
          </Link>
          <a href={resume} download="Kamlesh Kandpal Front-End Developer.pdf">
            <img className="w-6 object-scale-down" src={download} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Detail;
