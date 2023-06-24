import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { experiences } from "./Experience.constants";

export const Experience = () => (
  <div className="mt-24 flex flex-col">
    <div className="text-3xl font-bold pl-4 flex gap-2 items-center">
      <ImOffice className="text-tinker" />
      <span>Professional Experiences</span>
    </div>
    <div className="ml-14">
      {experiences.map((experience, i) => (
        <div
          key={i}
          className="flex flex-col mt-4 hover:border-l-4 hover:border-tinker hover:pl-4 transition-all duration-200"
        >
          <span className="text-tinker font-bold text-xl">{experience.institute}</span>
          <span className="font-light text-pencil">{experience.positon}</span>
          <div className="flex gap-4 text-xs font-light mt-2">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-tinker" />
              <span>{experience.location}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaClock className="text-tinker" />
              <span>{experience.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
