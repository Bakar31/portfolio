import { SiGooglescholar } from "react-icons/si";
import { publications } from "./Publication.constants";
import { Section } from "@/components/Section";

export const Publication = () => (
  <Section title="Publications" Icon={SiGooglescholar}>
    {publications.map((item, i) => (
      <div key={i} className="flex flex-col mt-4 group">
        <div className="flex gap-4">
          <span className="text-charcoal">{item.duration}</span>
          <p className="timeline-text">
            <span dangerouslySetInnerHTML={{ __html: item.authors }}></span>, <b>{item.title}</b> {item.description},{" "}
            {item.duration}.
          </p>
        </div>
      </div>
    ))}
  </Section>
);
