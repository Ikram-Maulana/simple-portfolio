import { ProjectCardProps } from "@/types";
import { ExternalLink, Github } from "lucide-react";
import { Tokens } from "../../mirrorful/.mirrorful/theme";
import ButtonAccent from "./button-accent";
import ImageScroll from "./image-scroll";

export default function ProjectCard({ item }: ProjectCardProps) {
  return (
    <div className="lg:[&:nth-child(even)>div>.image-project]:col-start-2 lg:[&:nth-child(even)>div>.image-project]:col-end-3 lg:[&:nth-child(even)>div>.text-project]:col-start-1 lg:[&:nth-child(even)>div>.text-project]:col-end-2 lg:[&:nth-child(even)>div>.text-project]:row-start-1 lg:[&:nth-child(even)>div>.text-project]:row-end-2">
      <div
        className="grid w-full grid-cols-1 gap-8 p-5 rounded-lg lg:gap-6 lg:grid-cols-2 justify-items-center lg:p-6"
        style={{
          backgroundColor: Tokens.colors["pearl-bush"]["base"],
        }}
      >
        <ImageScroll
          name={item.name}
          imageUrl={item.image_url}
          demoUrl={item.demo_url}
        />

        <div className="flex flex-col items-center justify-center w-full text-center text-project lg:items-start lg:justify-start lg:text-start text-tprimary lg:self-center">
          <h3 className="text-xl font-bold tracking-tight scroll-m-20 font-montserrat">
            {item.name}
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-4">
            {item.description}
          </p>
          <small className="mt-3 text-sm font-medium leading-none text-tprimary/50">
            {item.techs.map((tech: any) => tech.name).join(", ")}
          </small>
          <div className="flex flex-row gap-2 mt-6">
            <ButtonAccent
              url={item.github_url}
              newTab
              styleNormal={{
                backgroundColor: Tokens.colors["old-lace"]["base"],
              }}
              styleHover={{
                backgroundColor: Tokens.colors["old-lace"][400],
              }}
            >
              <Github className="w-4 h-4 mr-2" />
              Github
            </ButtonAccent>
            <ButtonAccent url={item.demo_url} newTab>
              <ExternalLink className="w-4 h-4 mr-2" />
              Live Demo
            </ButtonAccent>
          </div>
        </div>
      </div>
    </div>
  );
}
