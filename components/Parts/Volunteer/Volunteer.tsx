import { FaHandsHelping } from "react-icons/fa";
import { voluteerings } from "./Volunteer.constants";
import { Section } from "@/components/Section";
import { CardSmall } from "@/components/CardSmall";

export const Volunteer = () => (
  <Section title="Voluntary Activities" Icon={FaHandsHelping}>
    <div className="flex flex-col mt-4">
      {voluteerings.map((item, i) => (
        <CardSmall key={i} item={item} />
      ))}
    </div>
  </Section>
);
