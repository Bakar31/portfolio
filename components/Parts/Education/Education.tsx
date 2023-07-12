import { FaGraduationCap } from "react-icons/fa";
import { educations } from "./Education.constants";
import { Section } from "@/components/Section";
import { CardLarge } from "@/components/CardLarge";

export const Education = () => (
  <Section Icon={FaGraduationCap} title="Educational Background">
    <div className="flex flex-col mt-4">
      {educations.map((education, i) => (
        <CardLarge key={i} item={education} />
      ))}
    </div>
  </Section>
);
