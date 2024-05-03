import React from "react";
import { projects } from "@/constants";
import Image from "next/legacy/image";
import Link from "next/link";

export const Projects = () => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="py-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map(({ title, image, stack, url }, index) => (
            <div
              key={index}
              style={{
                height: "30vh",
                lg: { height: "40vh" },
                width: "100%",
                position: "relative",
              }}
              className="relative flex items-center justify-center shadow-lg shadow-gray-400 rounded-xl p-0 group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
            >
              <Image
                layout="fill"
                objectFit="cover"
                className="rounded-xl group-hover:opacity-10"
                src={image}
                alt="/"
              />
              <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="text-2xl text-white tracking-wider text-center">
                  {title}
                </h3>
                <p className="pb-4 pt-2 text-white text-center">{stack[0]}</p>
                <Link href={`${url}`}>
                  <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
                    More Info
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
