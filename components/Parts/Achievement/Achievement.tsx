import { achievements } from "./Achievement.constants";
import { BsFillTrophyFill } from "react-icons/bs";
import { EAchievementType } from "@/types";
import { FaCertificate } from "react-icons/fa";
import { GiLaurelsTrophy } from "react-icons/gi";
import { Section } from "@/components/Section";

export const Achievement = () => (
  <Section title="Achievements" Icon={GiLaurelsTrophy}>
    <div className="flex flex-col mt-4">
      {achievements.map((achievement, i) => (
        <div key={i}>
          {achievement.items.map((item, k) => (
            <div className="group achievement-card-bg" key={k}>
              <div className="text-3xl -m-2 w-14 text-charcoal group-hover:text-whiteboard transition-all duration-500">
                {achievement.type === EAchievementType.AWARD ? <BsFillTrophyFill /> : <FaCertificate />}
              </div>
              <span className="w-12">{item.duration}</span>
              <span className="font-bold">{item.title}</span>
              <span className="achievement-card-subtitle">{item.subtitle}</span>
              <span>{item.location}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  </Section>
);
