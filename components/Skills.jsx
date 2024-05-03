import React from "react";
import Image from "next/image";
import { skills } from "@/constants";

export const Skills = () => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2 items-center">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="py-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300"
            >
              <div className="grid grid-cols-2 gap-4 justify-center items-center">
                <div className="m-auto">
                  <div
                    style={{ borderRadius: "50px" }}
                    className="p-1 rounded-lg dark:bg-gray-200"
                  >
                    <Image
                      width="64"
                      height="64"
                      src={`/assets/skills/${skill
                        .replace(/\s+/g, "")
                        .toLowerCase()}.png`}
                      alt={skill}
                    />
                  </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                  <h3>{skill}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
