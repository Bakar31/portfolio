import { PiCertificateFill } from "react-icons/pi";
import { Section } from "../Section";
import { courseworks } from "./Coursework.constants";
import { Card } from "./Card";

export const Coursework = () => (
  <Section title="Courseworks" Icon={PiCertificateFill}>
    <div className="mt-4 flex flex-row gap-2">
      {courseworks.map((course, i) => (
        <Card key={i} course={course} />
      ))}
    </div>
  </Section>
);
