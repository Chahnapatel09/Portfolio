import React from "react";
import work from "../assets/work.png";
import frontend from "../assets/frontend.png";
import backend from "../assets/backend.png";
import database from "../assets/database.png";

const About = () => {
  return (
    <div
      id="About"
      className="text-white flex flex-col md:flex-row overflow-hidden items-center md:justify-between bg-[#915EFF] shadow-xl mx-4 md:mx-20 bg-opacity-30 rounded-lg p-6 md:p-5">
      <div className="w-full md:w-1/2 flex justify-center md:justify-start mt-8 md:mt-0 group">
        <img
          className="w-4/5 md:w-3/4 max-w-[350px] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-purple-500/50"
          src={work}
          alt="About img"/>
      </div>

      {/* Right Section (Text) */}
      <div className="w-full md:w-1/2">
        <h2 className="text-2xl md:text-2xl font-bold text-center md:text-left">
          About
        </h2>
        <div className="mt-6 space-y-6">

          <div className="flex items-start gap-4">
            <img src={frontend} alt="/" className="w-10 h-10 mt-1 animate-3d-spin"/>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105">
              <h1 className="text-md md:text-xl font-semibold leading-normal">
                Frontend Developer
              </h1>
              <p className="text-xs md:text-md leading-tight">
                I specialize in building user-friendly, responsive web
                applications using React.js and Tailwind CSS.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
          <img src={backend} alt="/" className="w-10 h-10 mt-1 animate-3d-spin"/>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105">
              <h1 className="text-md md:text-xl font-semibold leading-normal">
                Backend Developer
              </h1>
              <p className="text-xs md:text-md leading-tight">
                I develop robust and secure backend systems using Node.js and
                Express.js, ensuring smooth API integrations.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <img src={database} alt="/" className="w-10 h-10 mt-1 animate-3d-spin"/>

            <div className="w-full max-w-md bg-white/10 backdrop-blur-md p-2 rounded-lg transition-all duration-300 ease-in-out hover:bg-white/20 hover:scale-105">
              <h1 className="text-md md:text-xl font-semibold leading-normal">
                Database Developer
              </h1>
              <p className="text-xs md:text-md leading-tight">
                Experienced in MongoDB and MySQL ensuring efficient, secure, and
                scalable data management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
