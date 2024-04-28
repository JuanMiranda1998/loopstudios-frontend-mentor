/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ProjectCard = ({ title, bgMobile, bgDesktop }) => {
  return (
    <div className="flex items-end h-[120px] sm:h-[200px] md:w-full md:h-[550px] relative z-10">
      <div className="bg-gradient-to-r from-black to-transparent absolute top-0 left-0 bottom-0 right-0 z-0">
        <img
          className="w-full h-full block md:hidden mix-blend-multiply"
          src={bgMobile}
          alt=""
        />
        <img
          className="w-full h-full hidden md:block mix-blend-multiply"
          src={bgDesktop}
          alt=""
        />
      </div>
      <div className=" mb-4 ml-4 max-w-40 z-10">
        <h1 className="w-[90%] font-title text-[1.75rem] leading-7 text-white uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ProjectCard;
