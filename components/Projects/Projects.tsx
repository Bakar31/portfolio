import { SiAppstore } from "react-icons/si";
import { Section } from "../Section";
import { projectGroups } from "./Projects.constants";
import Image from "next/image";
import { Badge, Button } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

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
            <div key={k} className="card-bg group">
              <Image src={project.image} alt={project.title} width={1280} height={640} />
              <div className="flex gap-1 -mt-3 ml-2">
                {project.tags.map((tag, i) => (
                  <Badge key={i} color={"success"} size={"xs"}>
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="">
                <p className="text-xl text-charcoal font-bold my-2 px-3 overflow-hidden truncate">{project.title}</p>
                <p className="font-light text-sm text-charcoal px-3">{project.description}</p>
                <a className="absolute bottom-0 p-2" href={project.link} target="_blank">
                  <Button size={"xs"} pill className="bg-tinker hover:bg-linter">
                    <FaExternalLinkAlt className="mr-2" /> <span>Browse</span>
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    ))}
  </Section>
);
