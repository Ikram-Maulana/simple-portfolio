import ButtonAccent from "@/components/button-accent";
import ProjectCard from "@/components/project-card";
import prisma from "@/lib/prisma";
import { ArrowRight } from "lucide-react";
import { Tokens } from "mirrorful/.mirrorful/theme";
import { unstable_noStore as noStore } from "next/cache";
import { FC } from "react";

const getFeaturedProjects = async () => {
  "use server";
  noStore();

  try {
    const projects = await prisma.projects.findMany({
      where: {
        featured: true,
      },
    });

    return projects;
  } catch (error) {
    return [];
  }
};

const Projects: FC = async () => {
  const projects = await getFeaturedProjects();

  return (
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

      {projects.length > 0 && (
        <ButtonAccent url="/projects" centered>
          View All Projects
          <ArrowRight className="ml-2" />
        </ButtonAccent>
      )}
    </div>
  );
};

export default Projects;
