import { FaClock, FaGraduationCap, FaMapMarkerAlt } from "react-icons/fa";
import { educations } from "./Education.constants";
import { Section } from "@/components/Section";
import Image from "next/image";

export const Education = () => (
  <Section Icon={FaGraduationCap} title="Educational Background">
    {educations.map((education, i) => (
      <div key={i} className="hoverable-card group">
        <Image
          className="group-hover:scale-105 transition-all duration-500"
          src={education.logo}
          width={50}
          height={50}
          alt={education.institute}
        />
        <div className="flex flex-grow flex-col group-hover:ml-4 transition-all duration-500">
          <span className="text-tinker group-hover:text-whiteboard font-bold text-xl transition-all duration-500">
            {education.institute}
          </span>
          <span className="font-bold text-sm text-charcoal group-hover:text-whiteboard transition-all duration-500">
            {education.degree}
          </span>
        </div>
        <div className="flex flex-col gap-2 text-sm font-light mt-2 w-64">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="text-tinker group-hover:text-whiteboard transition-all duration-500" />
            <span className="text-charcoal group-hover:text-whiteboard transition-all duration-500">
              {education.location}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock className="text-tinker group-hover:text-whiteboard transition-all duration-500" />
            <span className="text-charcoal group-hover:text-whiteboard transition-all duration-500">
              {education.duration}
            </span>
          </div>
        </div>
      </div>
    ))}
  </Section>
);
