import { SiAppstore } from "react-icons/si";
import { projectGroups } from "./Projects.constants";
import { Slide } from "pure-react-carousel";
import { IProjectGroup } from "@/types";
import { Section } from "@/components/Section";
import { CardBox } from "@/components/CardBox";
import { Slider } from "@/components/Slider";

function projectMapper(projectGroups: IProjectGroup[]) {
  const projects = [];
  for (let i = 0; i < projectGroups.length; i++) {
    for (let k = 0; k < projectGroups[i].items.length; k++) {
      projects.push({ ...projectGroups[i].items[k], groupName: projectGroups[i].type });
    }
  }
  return projects;
}

export const Projects = () => {
  const projects = projectMapper(projectGroups);
  return (
    <Section title="Applications & Libraries" Icon={SiAppstore}>
      <Slider maxLength={projects.length}>
        {projects.map((project, k) => (
          <Slide index={k} key={k}>
            <CardBox key={k} item={project} buttonText="Browse" />
          </Slide>
        ))}
      </Slider>
    </Section>
  );
};
