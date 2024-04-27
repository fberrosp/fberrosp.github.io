import React from "react";
import botImage from "../public/assets/projects/bot.jpg";
import ProjectItem from "@/components/ProjectItem";

export const applicationBot = () => {
  const stack = ["Python", "Selenium", "Pandas", "Numpy"];
  return (
    <ProjectItem
      projectTitle="Application Bot"
      projectSubtitle="Python / Selenium / Pandas"
      projectImage={botImage}
      projectOverview="Developed an Exploratory Data Analysis (EDA) report to determine Formula 1 lap time variations over time. Conducted a thorough data cleaning process by classifying missing variables, performing data imputation and encoding categorical data types to numeric using Pandas and Seaborn Python libraries. Performed univariate and multivariate analysis to determine relevant variables and spot possible correlations."
      projectDemo="/"
      projectCode="https://github.com/fberrosp/jobApplicationBot"
      projectTechStack={stack}
    />
  );
};

export default applicationBot;
