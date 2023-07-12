import { SiAppstore } from "react-icons/si";
import { projectGroups } from "./Projects.constants";
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { Card } from "./Card";
import { ButtonBack, ButtonNext, CarouselProvider, Slide, Slider } from "pure-react-carousel";
import { IProjectGroup } from "@/types";
import { Section } from "@/components/Section";

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
    <Section title="Projects & Endeavors" Icon={SiAppstore}>
      <CarouselProvider
        visibleSlides={4}
        totalSlides={projects.length}
        step={1}
        naturalSlideWidth={8}
        naturalSlideHeight={9}
        infinite={true}
        touchEnabled={true}
        dragEnabled={true}
        className={"relative"}
      >
        <ButtonBack className="group carousel-btn-back">
          <BsFillArrowLeftCircleFill className="carousel-left-caret" />
        </ButtonBack>
        <Slider className="p-5">
          {projects.map((project, k) => (
            <Slide index={k} key={k} className="">
              <Card key={k} project={project} />
            </Slide>
          ))}
        </Slider>
        <ButtonNext className="group carousel-btn-next">
          <BsFillArrowRightCircleFill className="carousel-right-caret" />
        </ButtonNext>
      </CarouselProvider>
    </Section>
  );
};
