import Image from "next/legacy/image";
import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";

interface ProjectsProps {
  name: string;
  imageLink: string;
  description: string;
  githubLink: string;
  demoLink: string;
}

const Projects = ({
  name,
  imageLink,
  description,
  githubLink,
  demoLink,
}: ProjectsProps) => {
  return (
    <>
      <Image
        loader={({ src }) => src}
        src={imageLink}
        alt={name}
        width={1280}
        height={1024}
        className="object-cover rounded-md image-projects"
        unoptimized={true}
      />
      <h2 className="mt-3 mb-2.5 text-2xl font-bold tracking-tight text-gray-900 dark:text-[#CCD6F6]">
        {name}
      </h2>
      <p className="font-normal text-gray-700 dark:text-[#8892B0]">
        {description.length > 83
          ? description.slice(0, 83) + "..."
          : description}
      </p>

      <div className="button-projects">
        <Link
          href={githubLink}
          className="inline-flex py-2.5 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <BsGithub className="mr-2 h-5 w-5" />
          Github
        </Link>
        <Link href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-md group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 w-full">
            <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
              Live Demo
            </span>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Projects;
