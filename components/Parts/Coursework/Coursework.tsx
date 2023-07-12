import { PiCertificateFill } from "react-icons/pi";
import { courseworks } from "./Coursework.constants";
import { Section } from "@/components/Section";
import { CardBox } from "@/components/CardBox";
import { Slide } from "pure-react-carousel";
import { Slider } from "@/components/Slider";

export const Coursework = () => {
  return (
    <Section title="Courseworks" Icon={PiCertificateFill}>
      <Slider maxLength={courseworks.length}>
        {courseworks.map((course, i) => (
          <Slide index={i} key={i}>
            <CardBox key={i} item={course} buttonText="View Certificate" />
          </Slide>
        ))}
      </Slider>
    </Section>
  );
};
