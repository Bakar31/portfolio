import { IProjectItem } from "@/types";
import { Badge, Button } from "flowbite-react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

interface IProps {
  project: IProjectItem;
}

export const Card = ({ project }: IProps) => (
  <div className="card-bg group">
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
);
