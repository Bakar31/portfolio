import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { experiences } from "./Experience.constants";
import { Section } from "@/components/Section";

export const Experience = () => (
  <Section Icon={ImOffice} title="Professional Experiences">
    {experiences.map((experience, i) => (
      <div key={i} className="iterator-section">
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
  </Section>
);
