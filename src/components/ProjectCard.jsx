/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const ProjectCard = ({ title, bgMobile, bgDesktop }) => {
  return (
    <div className="flex items-end cursor-pointer md:px-4 md:pb-2 h-[120px] sm:h-[200px] md:w-full md:h-[350px] lg:h-[400px] xl:h-[500px] relative z-10 text-white hover:text-black hover:bg-[#ffffff90] transition ease duration-100">
        <div className="bg-gradient-to-r from-black to-transparent md:bg-gradient-to-t absolute top-0 left-0 bottom-0 right-0 z-0 mix-blend-lighten">
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
        <div className="mb-4 ml-4 max-w-40 md:max-w-[165px] z-10">
          <h1 className="w-[90%] md:w-full font-title text-[1.75rem] md:text-4xl leading-7 uppercase">
            {title}
          </h1>
        </div>
    </div>
  );
};

export default ProjectCard;
