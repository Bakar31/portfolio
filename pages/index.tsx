import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Intro } from "@/components/Intro";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <main className="w-full text-whiteboard">
      <Sidebar className="w-72 min-h-screen bg-tinker flex flex-col p-2 fixed" />
      <div className="ml-72 min-h-screen bg-whiteboard text-midnight flex flex-col p-10">
        <Intro />
        <Education />
        <Experience />
        <Skills />
      </div>
    </main>
  );
}
