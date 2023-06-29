import { SiAppstore } from "react-icons/si";
import { Section } from "../Section";
import { projectGroups } from "./Projects.constants";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Card } from "./Card";

export const Projects = () => (
  <Section title="Projects & Endeavors" Icon={SiAppstore}>
    {projectGroups.map((group, i) => (
      <div key={i}>
        <div className="flex my-3 items-center gap-2 text-xl text-tinker font-bold">
          <BsFillArrowRightCircleFill />
          <span>{group.type}</span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {group.items.map((project, k) => (
            <Card key={k} project={project} />
          ))}
        </div>
      </div>
    ))}
  </Section>
);
