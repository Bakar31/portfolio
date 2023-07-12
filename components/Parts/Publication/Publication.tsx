import { SiGooglescholar } from "react-icons/si";
import { publications } from "./Publication.constants";
import { Section } from "@/components/Section";

export const Publication = () => (
  <Section title="Publications" Icon={SiGooglescholar}>
    {publications.map((item, i) => (
      <div key={i} className="iterator-section">
        <div className="font-light text-charcoal text-sm">
          <span dangerouslySetInnerHTML={{ __html: item.authors }}></span>, <b>{item.title}</b> {item.description},{" "}
          {item.duration}.
        </div>
      </div>
    ))}
  </Section>
);
