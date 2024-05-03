import React from "react";
import { styles } from "@/styles/styles";
import { experiences } from "@/constants";
import Image from "next/legacy/image";

export const Experience = () => {
  return (
    <section id="experience" className="w-full flex lg:h-screen items-center">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className={styles.sectionHeadText}>Experience</h2>
        <div className="grid md:grid-cols-1 divide-y-4 md:divide-y-0">
          {experiences.map(({ company, logo, dates, description }, index) => (
            <div
              key={index}
              className="grid md:grid-cols-2 md:divide-x-4 items-center"
            >
              <div
                style={{ height: "64px", width: "100%", position: "relative" }}
                className="flex items-center justify-center h-auto w-full p-4"
              >
                <Image
                  layout="fill"
                  objectFit="contain"
                  src={logo}
                  alt={company}
                />
              </div>

              <div className="relative items-center justify-center h-auto w-full p-4">
                <div className="">
                  <p className="p-2 text-center text-gray-500">{dates}</p>
                  <h3 className="text-2xl tracking-wider text-center">
                    {company}
                  </h3>
                  <p className="pb-4 pt-2 text-center">{description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
