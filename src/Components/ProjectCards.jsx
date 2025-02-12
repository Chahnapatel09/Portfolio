import React from "react";
import project from "../assets/project.jpg";

const ProjectCards = ({ title, main, codeLink }) => {
  return (
    <div className="p-3 flex flex-col items-center w-64 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-xl min-h-[300px]">
      <img className="w-full h-32 object-cover rounded-t-xl" src={project} alt="Project" />

      {/* Title Section */}
      <div className="h-12 flex items-center justify-center w-full">
        <h3 className="text-md font-bold">{title}</h3>
      </div>

      {/* Main Content Section */}
      <div className="h-16 flex items-center justify-center w-full px-3">
        <p className="text-sm text-gray-300 text-center">{main}</p>
      </div>

      {/* Buttons Section */}
      <div className="mt-3 flex gap-3 h-10">
        {/* <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white text-sm px-3 py-1 bg-[#915EFF] rounded-lg hover:scale-105 transition">
            Demo
          </button>
        </a> */}
        <a href={codeLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white text-sm px-3 py-1 bg-[#915EFF] rounded-lg hover:scale-105 transition">
            Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCards;

