import { FaGraduationCap } from "react-icons/fa";
import { educations } from "./Education.constants";
import { Section } from "@/components/Section";
import { CardLarge } from "@/components/LargeCard";

export const Education = () => (
  <Section Icon={FaGraduationCap} title="Educational Background">
    {educations.map((education, i) => (
      <CardLarge key={i} item={education} />
    ))}
  </Section>
);
