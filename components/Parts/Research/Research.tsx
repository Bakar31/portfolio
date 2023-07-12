import { ImLab } from "react-icons/im";
import { researches } from "./Research.constants";
import { FaBookOpen, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Section } from "@/components/Section";

export const Research = () => (
  <Section title="Academic Research Activities" Icon={ImLab}>
    {researches.map((research, i) => (
      <div key={i} className="iterator-section">
        <span className="text-tinker font-bold text-xl">{research.type}</span>
        <span className="font-light text-pencil">{research.title}</span>
        <div className="flex gap-4 text-xs font-light mt-2">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="text-tinker" />
            <span>{research.location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock className="text-tinker" />
            <span>{research.duration}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaBookOpen className="text-tinker" />
            {research.supervisor && `Supervised by: ${research.supervisor}`}
            {research.course && `${research.course}`}
          </div>
        </div>
        <div className="flex flex-col text-xs text-pencil mt-3 gap-1 font-light">
          {research.details.map((item, i) => (
            <span key={i} className="details-text">
              {item}
            </span>
          ))}
        </div>
      </div>
    ))}
  </Section>
);
