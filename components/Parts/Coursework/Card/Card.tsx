import Image from "next/image";
import { Badge, Button } from "flowbite-react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { ICourseItem } from "@/types";

interface IProps {
  course: ICourseItem;
}

export const Card = ({ course }: IProps) => (
  <div className="group course-card-bg">
    <Image src={course.image} alt={course.title} width={1280} height={640} />
    <div className="group-hover:-mt-5 bg-gray-50 transition-all duration-200">
      <div className="-mt-3 ml-2 flex gap-1">
        <Badge color={"success"} size={"xs"}>
          {course.institute}
        </Badge>
        <Badge color={"lime"} size={"xs"}>
          {course.duration}
        </Badge>
      </div>
      <p className="text-xl text-charcoal font-bold my-2 px-3 overflow-hidden truncate">{course.title}</p>
      <p className="font-light text-sm text-charcoal px-3">{course.description}</p>
      <div className="flex gap-1 m-0 group-hover:mt-2 transition-all duration-300 ml-2 mt-20">
        {course.tags.map((tag, i) => (
          <Badge key={i} color={"success"} size={"xs"}>
            {tag}
          </Badge>
        ))}
      </div>
      <a className="absolute bottom-0 p-2" href={course.link} target="_blank">
        <Button size={"xs"} pill className="bg-tinker hover:bg-linter">
          <FaExternalLinkAlt className="mr-2" /> <span>View Certificate</span>
        </Button>
      </a>
    </div>
  </div>
);
