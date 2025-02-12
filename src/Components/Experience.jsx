import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";
import nodejs from "../assets/nodejs.png";
import mongodb from "../assets/mongodb.png";
import git from "../assets/git.png";
import java from "../assets/java.png";

const Experience = () => {
  return (
    <div id="Experience" className="p-5 md:px-24">
      <h1 className="text-xl pt-10 md:text-2xl text-white font-bold">
        Experience
      </h1>
      <div className="flex flex-wrap items-center justify-around">
        <div className="flex flex-wrap justify-start md:w-2/5 gap-3 md: py-30">
          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={html}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>

          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={css}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>

          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={reactjs}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>

          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={tailwind}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>

          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={nodejs}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>

          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={mongodb}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>

          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={git}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>

          <span className="p-1 bg-zinc-950 flex items-center rounded-2xl group transition-shadow duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            <img
              src={java}
              alt=""
              className="w-10 h-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
            />
          </span>
        </div>

        <div>
          <div className="flex w-full gap-2 text-white bg-gradient-to-r from-[#915EFF] to-transparent mt-4 rounded-lg p-2 items-center 
                transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#915EFF]/50 
                relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent 
                before:transition-all before:duration-500 before:hover:border-[#915EFF]">
            <span>
              <h2 className="leading-tight text-md font-semibold">
                IITE-Indus University
              </h2>
              <p className="text-xs leading-tight font-thin">Dec 2022</p>
              <ul className="text-sm p-2 space-y-1">
                <li>- Worked as an application developer</li>
                <li>
                  - Enhanced interactivity with dynamic elements & transitions.
                </li>
              </ul>
            </span>
          </div>


          <div className="flex w-full gap-2 text-white bg-gradient-to-r from-[#915EFF] to-transparent mt-4 rounded-lg p-2 items-center 
                transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-[#915EFF]/50 
                relative before:absolute before:inset-0 before:rounded-lg before:border-2 before:border-transparent 
                before:transition-all before:duration-500 before:hover:border-[#915EFF]">
            <span>
              <h2 className="leading-tight text-md font-semibold">
                Elsner Technologies Pvt Ltd
              </h2>
              <p className="text-xs leading-tight font-thin">Jun 2023</p>
              <ul className="text-sm p-2 space-y-1">
                <li>- Worked as a junior web developer</li>
                <li>- Created responsive websites</li>
              </ul>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
