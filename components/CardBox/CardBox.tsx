import { EProjectType, ICourseItem, IProjectItem } from "@/types";
import { Badge, Button } from "flowbite-react";
import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";

type TProjectItem = IProjectItem & { groupName: EProjectType };
type TCourseItem = ICourseItem;

interface IProps {
  item: TProjectItem | TCourseItem;
  buttonText: string;
}

export const CardBox = ({ item, buttonText }: IProps) => (
  <div className="project-card-bg group">
    <Image src={item.image} alt={item.title} width={1280} height={640} />
    <div className="project-card-body">
      <div className="-mt-3 ml-2 flex gap-1 justify-center sm:justify-start">
        <Badge color={"success"} size={"xs"}>
          {(item as TProjectItem).groupName || (item as TCourseItem).institute}
        </Badge>
        <Badge color={"lime"} size={"xs"}>
          {item.duration}
        </Badge>
      </div>
      <p className="text-xl text-charcoal font-bold my-2 px-3 overflow-hidden truncate">{item.title}</p>
      <p className="font-light text-sm text-charcoal px-3">{item.description}</p>
      <div className="project-card-tags">
        {item.tags.map((tag, i) => (
          <Badge key={i} color={"success"} size={"xs"}>
            {tag}
          </Badge>
        ))}
      </div>
      <div className="absolute bottom-0 p-2 left-1/2 -translate-x-1/2 sm:left-0 sm:translate-x-0">
        <Button size={"xs"} pill className="bg-tinker hover:bg-linter w-48 sm:w-auto" href={item.link} target="_blank">
          <FaExternalLinkAlt className="mr-2" /> <span>{buttonText}</span>
        </Button>
      </div>
    </div>
  </div>
);
