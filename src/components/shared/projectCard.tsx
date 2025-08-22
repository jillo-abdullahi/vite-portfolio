import type { FC } from "react";
import type { PortfolioProject, TechStack } from "@/types";
import { ProjectStatusBadge } from "./projectStatusBadge";
import ButtonGroup from "./buttonGroup";

interface ProjectCardProps {
  project: PortfolioProject;
}

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const { title, description, image, preview, github, stacks, completed } =
    project;

  return (
    <li
      key={title}
      className="grid grid-col-featured gap-[10px] items-center idea"
    >
      <div className="project-content z-30">
        <div>
          {!completed && (
            <div className="flex items-center justify-end mb-2">
              <ProjectStatusBadge />
            </div>
          )}

          <div className="title flex">
            <h3 className="mb-5 text-orange text-lg font-medium externals w-fit">
              <a href={preview} target="_blank" rel="noopener noreferrer">
                {title}
              </a>
            </h3>
          </div>

          <div className="text-gray-200 p-[25px] border border-gray-900 rounded-2xl bg-[#272F3790] shadowy">
            <p>{description}</p>
          </div>

          <ul className="flex items-center gap-x-2 gap-y-2 flex-wrap text-gray-200 text-sm mt-6">
            {stacks.map((tech: TechStack) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>

          <div className="mt-8">
            <ButtonGroup previewLink={preview} sourceCodeLink={github} />
          </div>
        </div>
      </div>

      <div className="project-image">
        <a
          className="inline-block w-full h-full"
          href={preview}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* Note: Image should be imported in the parent component */}
          <div className="h-full">
            <img
              src={`/src/assets/portfolio/${image}`}
              alt={title}
              className="w-full h-full object-cover rounded-lg hover:grayscale-0 transition-all duration-300"
            />
          </div>
        </a>
      </div>
    </li>
  );
};
