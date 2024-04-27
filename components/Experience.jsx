import React from "react";
import cdcImage from "../public/assets/companies/cdcgold.png";
import ms4mImage from "../public/assets/companies/ms4m.png";
import proemisaImage from "../public/assets/companies/proemisa.png";
import ExperienceItem from "./ExperienceItem";

export const Experience = () => {
  return (
    <div id="experience" className="w-full flex lg:h-screen items-center">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-8">Experience</h2>
        <div className="grid md:grid-cols-1 divide-y-4 md:divide-y-0">
          <ExperienceItem
            companyName="Proemisa"
            companyLogo={proemisaImage}
            dates="January 2023 - Present"
            description="Optimized website performance, streamlined development, and enhanced visibility, resulting in faster page loads, efficient development, and higher user engagement."
          />

          <ExperienceItem
            companyName="MS4M"
            companyLogo={ms4mImage}
            dates="August 2021 - September 2022"
            description="Collaborated in the creation and optimization of a machine learning facial landmarks detection model for fatigue detection in haul truck drivers in South American mines."
          />

          <ExperienceItem
            companyName="CDC Gold"
            companyLogo={cdcImage}
            dates="January 2019 - July 2019"
            description="Developed a GPS tracking algorithm to identify haul truck delays and track routing of other mining equipment resulting in significant cost savings per truck per month."
          />
        </div>
      </div>
    </div>
  );
};

export default Experience;
