import { ImLab } from "react-icons/im";
import { researches } from "./Research.constants";
import { FaBookOpen, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Section } from "@/components/Section";
import { BiRightArrowAlt } from "react-icons/bi";
import Image from "next/image";

export const Research = () => (
  <Section title="Research Activities" Icon={ImLab}>
    {researches.map((research, i) => (
      <div key={i} className="hoverable-card group researches-card">
        <Image
          src={research.image}
          alt={research.title}
          width={150}
          height={150}
          className="sm:w-2/12 rounded-lg group-hover:shadow-xl hover:scale-110 transition-all duration-200"
        />
        <div className="flex-grow flex flex-col sm:w-6/12">
          <span className="hoverable-card-title">{research.type}</span>
          <span className="hoverable-card-subtitle">{research.title}</span>
          <ul className="research-description">
            {research.details.map((item, i) => (
              <li key={i} className="details-text">
                <BiRightArrowAlt className="hoverable-card-icon w-1/12 sm:w-3" />
                <span className="hoverable-card-text w-11/12">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-2 text-xs font-light sm:w-4/12 my-auto">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="hoverable-card-icon" />
            <span className="hoverable-card-text">{research.location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock className="hoverable-card-icon" />
            <span className="hoverable-card-text">{research.duration}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaBookOpen className="hoverable-card-icon" />
            <span className="hoverable-card-text">
              {research.supervisor && `Supervised by: ${research.supervisor}`}
              {research.course && `${research.course}`}
            </span>
          </div>
        </div>
      </div>
    ))}
  </Section>
);
