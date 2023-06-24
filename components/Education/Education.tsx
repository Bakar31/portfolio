import { FaClock, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { educations } from "./Education.constants";

export const Education = () => (
  <div className="mt-24 flex flex-col">
    <div className="text-3xl font-bold pl-4 flex gap-2 items-center">
      <FaGraduationCap className="text-tinker" />
      <span>Educational Background</span>
    </div>
    <div className="ml-14">
      {educations.map((education, i) => (
        <div key={i} className="iterator-section">
          <span className="text-tinker font-bold text-xl">{education.institute}</span>
          <span className="font-light text-pencil">{education.degree}</span>
          <div className="flex gap-4 text-xs font-light mt-2">
            <div className="flex gap-2 items-center">
              <FaMapMarkerAlt className="text-tinker" />
              <span>{education.location}</span>
            </div>
            <div className="flex gap-2 items-center">
              <FaClock className="text-tinker" />
              <span>{education.duration}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
