import { Achievement } from "@/components/Achievement";
import { Cocurricular } from "@/components/Cocurricular";
import { Coursework } from "@/components/Coursework";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Intro } from "@/components/Intro";
import { Projects } from "@/components/Projects";
import { Research } from "@/components/Research";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Skills } from "@/components/Skills";
import { Volunteer } from "@/components/Volunteer";

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
      </div>
    </main>
  );
}
