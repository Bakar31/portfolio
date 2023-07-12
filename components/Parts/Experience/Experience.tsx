import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { ImOffice } from "react-icons/im";
import { experiences } from "./Experience.constants";
import { Section } from "@/components/Section";
import Image from "next/image";

export const Experience = () => (
  <Section Icon={ImOffice} title="Professional Experiences">
    {experiences.map((experience, i) => (
      <div key={i} className="hoverable-card group">
        <Image
          className="group-hover:scale-105 transition-all duration-500"
          src={experience.logo}
          width={50}
          height={50}
          alt={experience.institute}
        />
        <div className="flex flex-grow flex-col group-hover:ml-4 transition-all duration-500">
          <span className="text-tinker group-hover:text-whiteboard font-bold text-xl transition-all duration-500">
            {experience.institute}
          </span>
          <span className="font-bold text-sm text-charcoal group-hover:text-whiteboard transition-all duration-500">
            {experience.positon}
          </span>
        </div>
        <div className="flex flex-col gap-2 text-sm font-light mt-2 w-64">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="text-tinker group-hover:text-whiteboard transition-all duration-500" />
            <span className="text-charcoal group-hover:text-whiteboard transition-all duration-500">
              {experience.location}
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock className="text-tinker group-hover:text-whiteboard transition-all duration-500" />
            <span className="text-charcoal group-hover:text-whiteboard transition-all duration-500">
              {experience.duration}
            </span>
          </div>
        </div>
      </div>
    ))}
  </Section>
);
