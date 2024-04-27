import React from "react";
import f1Image from "../public/assets/projects/f1.jpg";
import projectImage from "../public/assets/projects/project.jpg";
import botImage from "../public/assets/projects/bot.jpg";
import chatImage from "../public/assets/projects/texting.jpg";
import ProjectGridItem from "./ProjectGridItem";

export const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectGridItem
            title="Formula 1 App"
            backgroundImg={f1Image}
            techStack="Django"
            projectUrl="/formula1App"
          />
          <ProjectGridItem
            title="Project Management App"
            backgroundImg={projectImage}
            techStack="React JS"
            projectUrl="/projectManagementApp"
          />
          <ProjectGridItem
            title="Application Bot"
            backgroundImg={botImage}
            techStack="Python"
            projectUrl="/applicationBot"
          />
          <ProjectGridItem
            title="Chat Bot"
            backgroundImg={chatImage}
            techStack="Python"
            projectUrl="/chatBot"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
