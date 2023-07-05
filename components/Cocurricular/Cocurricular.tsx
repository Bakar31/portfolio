import { GiBiceps } from "react-icons/gi";
import { Section } from "../Section";
import { activities } from "./Cocurricular.constants";
import { FaClock, FaMapMarkerAlt } from "react-icons/fa";
import { Badge } from "flowbite-react";
import { BsFillBriefcaseFill } from "react-icons/bs";

export const Cocurricular = () => (
  <Section title="Extracurricular Activities" Icon={GiBiceps}>
    {activities.map((activity, i) => (
      <div key={i} className="iterator-section">
        <span className="text-tinker font-bold text-xl">{activity.designation}</span>
        <span className="font-light text-pencil">{activity.organization}</span>
        <div className="flex gap-4 text-xs font-light mt-2">
          <div className="flex gap-2 items-center">
            <FaMapMarkerAlt className="text-tinker" />
            <span>{activity.location}</span>
          </div>
          <div className="flex gap-2 items-center">
            <FaClock className="text-tinker" />
            <span>{activity.duration}</span>
          </div>
        </div>
        <div className="flex gap-1 mt-2">
          {activity.skills.map((item, k) => (
            <Badge color={"success"} key={k}>
              {item}
            </Badge>
          ))}
        </div>
        {activity.formers?.map((exActivity, x) => (
          <div className="flex flex-col ml-8 border-l-2 pl-2 mt-2 hover:ml-10 transition-all duration-200" key={x}>
            <div className="flex items-center gap-2 text-tinker text-sm font-normal">
              <BsFillBriefcaseFill />
              <span>{exActivity.designation}</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-light text-charcoal">
              <FaClock />
              <span>{exActivity.duration}</span>
            </div>
          </div>
        ))}
      </div>
    ))}
  </Section>
);
