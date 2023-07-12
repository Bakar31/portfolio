import { Achievement } from "@/components/Parts/Achievement";
import { Cocurricular } from "@/components/Parts/Cocurricular";
import { Coursework } from "@/components/Parts/Coursework";
import { Education } from "@/components/Parts/Education";
import { Experience } from "@/components/Parts/Experience";
import { Intro } from "@/components/Parts/Intro";
import { Projects } from "@/components/Parts/Projects";
import { Publication } from "@/components/Parts/Publication";
import { Research } from "@/components/Parts/Research";
import { Skills } from "@/components/Parts/Skills";
import { Volunteer } from "@/components/Parts/Volunteer";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="w-full text-whiteboard">
      <Sidebar className="w-72 min-h-screen bg-tinker flex flex-col p-2 fixed" />
      <div className="ml-72 min-h-screen bg-whiteboard text-midnight flex flex-col p-10">
        <Intro />
        <Education />
        <Experience />
        <Skills />
        <Research />
        <Projects />
        <Coursework />
        <Cocurricular />
        <Achievement />
        <Volunteer />
        <Publication />
      </div>
    </main>
  );
}
