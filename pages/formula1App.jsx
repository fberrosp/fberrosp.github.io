import Image from "next/image";
import React from "react";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";
import f1Image from "../public/assets/projects/f1.jpg";
import ProjectItem from "@/components/ProjectItem";

export const formula1App = () => {
  const stack = ["Django", "Plotly", "PostgreSQL", "Tailwind", , "Redis"];
  return (
    <ProjectItem
      projectTitle="Formula 1 App"
      projectSubtitle="Django / Plotly / PostreSQL"
      projectImage={f1Image}
      projectOverview="Developed an Exploratory Data Analysis (EDA) report to determine Formula 1 lap time variations over time. Conducted a thorough data cleaning process by classifying missing variables, performing data imputation and encoding categorical data types to numeric using Pandas and Seaborn Python libraries. Performed univariate and multivariate analysis to determine relevant variables and spot possible correlations."
      projectDemo="https://www.kaggle.com/code/fernandoberrospi/f1-eda-grand-prix-analysis"
      projectCode="https://github.com/fberrosp/F1-EDA-Grand-Prix-Analysis"
      projectTechStack={stack}
    />
  );
};

export default formula1App;
