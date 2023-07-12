import { ImOffice } from "react-icons/im";
import { experiences } from "./Experience.constants";
import { Section } from "@/components/Section";
import { CardLarge } from "@/components/LargeCard";

export const Experience = () => (
  <Section Icon={ImOffice} title="Professional Experiences">
    {experiences.map((experience, i) => (
      <CardLarge key={i} item={experience} />
    ))}
  </Section>
);
