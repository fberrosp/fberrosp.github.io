import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import chatImage from "../public/assets/projects/texting.jpg";
import ProjectItem from "@/components/ProjectItem";

export const chatBot = () => {
  const stack = ["Python", "TensorFlow"];
  return (
    <ProjectItem
      projectTitle="Chat Bot"
      projectSubtitle="Python / TensorFlow"
      projectImage={chatImage}
      projectOverview="Developed an Exploratory Data Analysis (EDA) report to determine Formula 1 lap time variations over time. Conducted a thorough data cleaning process by classifying missing variables, performing data imputation and encoding categorical data types to numeric using Pandas and Seaborn Python libraries. Performed univariate and multivariate analysis to determine relevant variables and spot possible correlations."
      projectDemo="/"
      projectCode="/"
      projectTechStack={stack}
    />
  );
};

export default chatBot;
