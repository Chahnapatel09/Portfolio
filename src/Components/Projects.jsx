import React from "react";
import ProjectCards from "./ProjectCards";

const Projects = () => {
  return (
    <div id="Projects" className="p-5 md:px-24 text-white">
      <h1 className="text-xl md:text-2xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex justify-center gap-5 items-center flex-wrap md:flex-nowrap">
        <ProjectCards
          title="Trainer-recommendation Website"
          main="ReactJs, NodeJs, ExpressJs, Mongodb"
          codeLink="https://github.com/dhruvipatel03/trainer-recommendation-system.git"
        />

        <ProjectCards
          title="Novel Selling - Website"
          main="HTML, CSS, Javascript and MySQL"
          codeLink="https://github.com/Chahnapatel09/novel-website.git"
        />

        <ProjectCards
          title="Service Website UI"
          main="HTML, CSS and JavaScript"
          codeLink="https://github.com/Chahnapatel09/service_website.git"
        />
      </div>
    </div>
  );
};

export default Projects;
