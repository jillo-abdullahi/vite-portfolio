import type { FC } from "react";
import { SectionHeading } from "../../../shared/SectionHeading";

const ProjectsHeader: FC = () => {
  return (
    <SectionHeading>
      <div className="flex items-center justify-start space-x-2">
        <span className="text-xl lg:text-2xl font-medium">
          recent projects{" "}
        </span>
      </div>
    </SectionHeading>
  );
};

export default ProjectsHeader;
