import React from "react";
import { projects } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { RiRadioButtonFill } from "react-icons/ri";

export default function ProjectPage({ project }) {
  return (
    <div>
      {project ? (
        <div className="w-full">
          <div className="w-screen h-[30vh] lg:h-[40vh] relative">
            <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
            <Image
              className="absolute z-1"
              layout="fill"
              objectFit="cover"
              src={project.image}
              alt="/"
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h2 className="py-2">{project.title}</h2>
              <h3>{project.subtitle}</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
            <div className="col-span-4">
              <h2>Project Overview</h2>
              <br />
              <p>{project.description}</p>
              <br />
              <Link href={project.demo} target="_blank">
                <button className="btn-custom">Demo</button>
              </Link>
              <Link href={project.code} target="_blank">
                <button className="btn-custom">Code</button>
              </Link>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
              <div className="p-2">
                <p className="text-center font-bold pb-2">Technologies</p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                  {project.stack.map((projectTechStackItem, index) => (
                    <p key={index} className="py-2 flex items-center">
                      <RiRadioButtonFill className="pr-1" />{" "}
                      {projectTechStackItem}
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <Link href="/#projects">
              <p className="underline cursor-pointer">Back</p>
            </Link>
          </div>
        </div>
      ) : (
        <div>Project not found</div>
      )}
    </div>
  );
}

export async function getStaticPaths() {
  const paths = projects.map((project) => ({
    params: { projectSlug: project.url.replace(/^\//, "") },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const { projectSlug } = params;

  const project = projects.find(
    (proj) => proj.url.replace(/^\//, "") === projectSlug
  );

  return {
    props: { project },
  };
}
