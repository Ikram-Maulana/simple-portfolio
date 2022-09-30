import Image from "next/image";
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
        className="object-cover rounded-md hover:scale-110 transition-all"
        unoptimized={true}
      />
      <h5 className="mt-3 mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {name}
      </h5>
      <p className="mb-7 font-normal text-gray-700 dark:text-gray-400">
        {description.length > 97
          ? description.slice(0, 97) + "..."
          : description}
      </p>

      <div className="grid grid-cols-2 grid-rows-1 gap-2 justify-center items-center">
        <Link href={githubLink}>
          <a
            className="inline-flex py-2.5 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 justify-center items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <BsGithub className="mr-2 h-5 w-5" />
            Github
          </a>
        </Link>
        <Link href={demoLink}>
          <a target="_blank" rel="noopener noreferrer">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800 w-full">
              <span className="relative px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 w-full">
                Live Demo
              </span>
            </button>
          </a>
        </Link>
      </div>
    </>
  );
};

export default Projects;
