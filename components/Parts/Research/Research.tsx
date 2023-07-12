import { ImLab } from "react-icons/im";
import { researches } from "./Research.constants";
import { FaBookOpen, FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Section } from "@/components/Section";
import { BiRightArrowAlt } from "react-icons/bi";

export const Research = () => (
  <Section title="Academic Research Activities" Icon={ImLab}>
    {researches.map((research, i) => (
      <div key={i} className="hoverable-card group">
        <div className="flex-grow flex flex-col">
          <span className="text-tinker group-hover:text-whiteboard font-bold text-xl">{research.type}</span>
          <span className="font-bold text-charcoal group-hover:text-whiteboard">{research.title}</span>
          <div className="flex flex-col text-xs text-pencil mt-3 gap-1 font-light">
            {research.details.map((item, i) => (
              <div key={i} className="details-text">
                <BiRightArrowAlt />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-1 text-xs font-light mt-2 w-64">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="text-tinker group-hover:text-whiteboard" />
            <span className="text-charcoal group-hover:text-whiteboard">{research.location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock className="text-tinker group-hover:text-whiteboard" />
            <span className="text-charcoal group-hover:text-whiteboard">{research.duration}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaBookOpen className="text-tinker group-hover:text-whiteboard" />
            <span className="text-charcoal group-hover:text-whiteboard">
              {research.supervisor && `Supervised by: ${research.supervisor}`}
              {research.course && `${research.course}`}
            </span>
          </div>
        </div>
      </div>
    ))}
  </Section>
);
