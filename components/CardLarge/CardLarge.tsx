import { IEducation, IExperience } from "@/types";
import Image from "next/image";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";

interface IProps {
  item: IEducation | IExperience;
}

function getDegreeOrPosition(item: IEducation | IExperience): string {
  if ("degree" in item) return item.degree;
  if ("position" in item) return item.position;
  return "";
}

export const CardLarge = ({ item }: IProps) => (
  <div className="hoverable-card group">
    <Image
      className="group-hover:scale-105 transition-all duration-500"
      src={item.logo}
      width={50}
      height={50}
      alt={item.institute}
    />
    <div className="flex flex-grow flex-col group-hover:ml-4 transition-all duration-500">
      <span className="hoverable-card-title">{item.institute}</span>
      <span className="hoverable-card-subtitle">{getDegreeOrPosition(item)}</span>
    </div>
    <div className="flex flex-col gap-2 text-sm font-light mt-2 w-64">
      <div className="flex gap-2 items-center">
        <FaMapMarkerAlt className="hoverable-card-icon" />
        <span className="hoverable-card-text">{item.location}</span>
      </div>
      <div className="flex gap-2 items-center">
        <FaClock className="hoverable-card-icon" />
        <span className="hoverable-card-text">{item.duration}</span>
      </div>
    </div>
  </div>
);
