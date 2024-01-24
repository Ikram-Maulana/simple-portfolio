import ProjectCard from "@/components/project-card";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { Suspense } from "react";
import { Tokens } from "../../../../mirrorful/.mirrorful/theme";
import LoadingSkeleton from "./loading-skeleton";

const getProjects = async () => {
  try {
    const projects = await prisma.projects.findMany();

    return projects;
  } catch (error) {
    return [];
  }
};

export default async function Projects() {
  const projects = await getProjects();

  return (
    <main>
      {/* Projects Section */}
      <section id="projects" className="pb-16 pt-36">
        <div className="container max-w-sm md:max-w-2xl lg:max-w-5xl">
          <div className="grid items-center grid-rows-1 gap-11 md:px-8">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight transition-colors scroll-m-20 first:mt-0 text-tprimary font-montserrat">
                Projects
              </h1>
              <p className="leading-7 [&:not(:first-child)]:mt-2 text-tprimary/60">
                Throughout my journey, I have created impressive applications
                and websites using a variety of technologies ranging from HTML
                to React (and even PHP!). Below are some of my preferred
                projects.
              </p>
            </div>

            <Suspense fallback={<LoadingSkeleton />}>
              <div className="flex flex-col gap-10">
                {projects.length > 0 ? (
                  projects.map((project) => (
                    <ProjectCard key={project.uuid} item={project} />
                  ))
                ) : (
                  <div
                    className="w-full p-5 rounded-lg justify-items-center lg:p-6"
                    style={{
                      backgroundColor: Tokens.colors["fire-opal"]["base"],
                    }}
                  >
                    <h4 className="text-center text-white">
                      No project yet, please check back later
                    </h4>
                  </div>
                )}
              </div>
            </Suspense>

            <Suspense fallback={null}>
              {projects.length > 0 && (
                <small className="text-sm font-medium leading-7 text-center">
                  Hey, hey, hey... I&apos;ve got even more on{" "}
                  <Link
                    href="https://github.com/ikram-maulana"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: Tokens.colors["fire-opal"]["base"],
                    }}
                  >
                    My Github!
                  </Link>
                </small>
              )}
            </Suspense>
          </div>
        </div>
      </section>
      {/* End Projects Section */}
    </main>
  );
}
