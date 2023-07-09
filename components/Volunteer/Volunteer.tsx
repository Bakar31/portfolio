import { FaHandsHelping } from "react-icons/fa";
import { Section } from "../Section";
import { voluteerings } from "./Volunteer.constants";
import Image from "next/image";

export const Volunteer = () => (
  <Section title="Voluntary Activities" Icon={FaHandsHelping}>
    <div className="flex flex-col mt-4">
      {voluteerings.map((item, i) => (
        <div className="group achievement-card-bg" key={i}>
          <Image className="-m-3 mr-5" src={item.image} alt={item.title} width={50} height={50} />
          <span className="w-12">{item.duration}</span>
          <span className="font-bold">{item.title}</span>
          <span className="achievement-card-subtitle">{item.subtitle}</span>
          <span>{item.location}</span>
        </div>
      ))}
    </div>
  </Section>
);
