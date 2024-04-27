import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import projectImage from "../public/assets/projects/project.jpg";
import ProjectItem from "@/components/ProjectItem";

export const projectManagementApp = () => {
  const stack = [
    "MongoDB",
    "Express JS",
    "React JS",
    "Node JS",
    "Tailwind",
    "Firebase",
  ];
  return (
    <ProjectItem
      projectTitle="Project Management App"
      projectSubtitle="React JS / Tailwind / Firebase"
      projectImage={projectImage}
      projectOverview="Designed a CRUD web application using Javascript as the frontend and Firebase as a backend as a service. Followed Model, View, Controller (MVC) architectural pattern for designing the system infrastructure. Developed the system logic using Object Oriented Programming (OOP) for improved scalability and code maintenance. Implemented team and role management features for administrators for successful project management capabilities."
      projectDemo="https://issuetrackingsystem-9d0f7.web.app/"
      projectCode="https://github.com/fberrosp/issueTrackingSystem"
      projectTechStack={stack}
    />
  );
};

export default projectManagementApp;
