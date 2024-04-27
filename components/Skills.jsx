import React from "react";
import SkillItem from "./SkillItem";

export const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SkillItem
            techName="JavaScript"
            techLogo="/assets/skills/javascript.png"
          />
          <SkillItem techName="Python" techLogo="/assets/skills/python.png" />

          <SkillItem techName="R" techLogo="/assets/skills/R.png" />

          <SkillItem techName="React" techLogo="/assets/skills/react.png" />

          <SkillItem techName="Next JS" techLogo="/assets/skills/nextjs.png" />

          <SkillItem
            techName="Express"
            techLogo="/assets/skills/expressjs.png"
          />

          <SkillItem techName="Django" techLogo="/assets/skills/django.png" />

          <SkillItem techName="Git" techLogo="/assets/skills/git.png" />

          <SkillItem techName="MongoDB" techLogo="/assets/skills/mongodb.png" />

          <SkillItem
            techName="PostgreSQL"
            techLogo="/assets/skills/postgresql.png"
          />

          <SkillItem
            techName="Firebase"
            techLogo="/assets/skills/firebase.png"
          />

          <SkillItem techName="Jira" techLogo="/assets/skills/jira.png" />

          <SkillItem techName="HTML" techLogo="/assets/skills/html.png" />

          <SkillItem techName="CSS" techLogo="/assets/skills/css.png" />

          <SkillItem
            techName="Tailwind CSS"
            techLogo="/assets/skills/tailwindcss.png"
          />

          <SkillItem
            techName="Bootstrap"
            techLogo="/assets/skills/bootstrap.png"
          />

          <SkillItem
            techName="TensorFlow"
            techLogo="/assets/skills/tensorflow.png"
          />

          <SkillItem techName="PyTorch" techLogo="/assets/skills/pytorch.png" />

          <SkillItem techName="Open CV" techLogo="/assets/skills/opencv.png" />

          <SkillItem
            techName="Power BI"
            techLogo="/assets/skills/powerbi.png"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
