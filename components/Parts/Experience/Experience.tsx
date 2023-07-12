import { ImOffice } from "react-icons/im";
import { experiences } from "./Experience.constants";
import { Section } from "@/components/Section";
import { CardLarge } from "@/components/CardLarge";

export const Experience = () => (
  <Section Icon={ImOffice} title="Professional Experiences">
    <div className="flex flex-col mt-4">
      {experiences.map((experience, i) => (
        <CardLarge key={i} item={experience} />
      ))}
    </div>
  </Section>
);
