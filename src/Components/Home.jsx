import React from "react";
import herobg from "../assets/herobg.png";
import girl from "../assets/girl.png";
import TextChange from "./TextChange";


const Home = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center"
      style={{ backgroundImage: `url(${herobg})` }}>
      <div className="absolute inset-0 top-28 w-full flex justify-center px-6 md:px-10">
        <div className="flex flex-row items-start gap-5 max-w-6xl w-full">
          {/* Left Section: Circle + Shorter Gradient Line */}
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
            <div className="w-1 h-70 sm:h-64 bg-gradient-to-b from-[#915EFF] via-[#7D50E2] to-transparent" />
          </div>

          {/* Right Section: Text Content */}
          <div>
            <h1 className="text-white text-2xl md:text-5xl lg:text-4xl font-bold pt-10">
              <TextChange />
            </h1>
            <p className="mt-2 text-white text-lg md:text-xl">
              I am a Full-Stack Developer <br className="sm:block hidden" />
              crafting seamless web experiences.
            </p>
          </div>
        </div>

        
        <div className="hidden md:block">
          <img className="animate-pulse-scale" src={girl} alt="girl" />
        </div>


      </div>
    </div>
  );
};

export default Home;