import { achievements } from "./Achievement.constants";
import { GiLaurelsTrophy } from "react-icons/gi";
import { Section } from "@/components/Section";
import { CardSmall } from "@/components/CardSmall";

export const Achievement = () => (
  <Section title="Achievements" Icon={GiLaurelsTrophy}>
    <div className="flex flex-col mt-4">
      {achievements.map((achievement, i) => (
        <div key={i}>
          {achievement.items.map((item, k) => (
            <CardSmall key={k} item={item} type={achievement.type} />
          ))}
        </div>
      ))}
    </div>
  </Section>
);
