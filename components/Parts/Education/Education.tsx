import { FaClock, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { educations } from "./Education.constants";
import { Section } from "@/components/Section";

export const Education = () => (
  <Section Icon={FaGraduationCap} title="Educational Background">
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
  </Section>
);
