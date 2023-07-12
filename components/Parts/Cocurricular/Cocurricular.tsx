import { GiBiceps } from "react-icons/gi";
import { activities } from "./Cocurricular.constants";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Badge } from "flowbite-react";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { Section } from "@/components/Section";

export const Cocurricular = () => (
  <Section title="Extracurricular Activities" Icon={GiBiceps}>
    {activities.map((activity, i) => (
      <div key={i} className="hoverable-card group">
        <div className="flex flex-col w-full sm:w-3/6">
          <span className="hoverable-card-title">{activity.designation}</span>
          <span className="hoverable-card-subtitle">{activity.organization}</span>
          <div className="flex flex-wrap gap-1 mt-2">
            {activity.skills.map((item, k) => (
              <Badge color={"success"} key={k}>
                {item}
              </Badge>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:w-2/6 gap-2">
          {activity.formers?.map((exActivity, x) => (
            <div className="flex flex-col" key={x}>
              <div className="flex items-center gap-2">
                <BsFillBriefcaseFill className="hoverable-card-icon" />
                <span className="hoverable-card-text">{exActivity.designation}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-light">
                <FaClock className="hoverable-card-icon" />
                <span className="hoverable-card-text">{exActivity.duration}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 text-xs font-light sm:w-1/6">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="hoverable-card-icon" />
            <span className="hoverable-card-text">{activity.location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock className="hoverable-card-icon" />
            <span className="hoverable-card-text">{activity.duration}</span>
          </div>
        </div>
      </div>
    ))}
  </Section>
);
