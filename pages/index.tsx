import { Achievement } from "@/components/Parts/Achievement";
import { Cocurricular } from "@/components/Parts/Cocurricular";
import { Coursework } from "@/components/Parts/Coursework";
import { Education } from "@/components/Parts/Education";
import { Experience } from "@/components/Parts/Experience";
import { Footer } from "@/components/Parts/Footer";
import { Intro } from "@/components/Parts/Intro";
import { Projects } from "@/components/Parts/Projects";
import { Publication } from "@/components/Parts/Publication";
import { Research } from "@/components/Parts/Research";
import { Skills } from "@/components/Parts/Skills";
import { Volunteer } from "@/components/Parts/Volunteer";
import { Sidebar } from "@/components/Sidebar";

export default function Home() {
  return (
    <main>
      <Sidebar />
      <div className="container-main">
        <Intro />
        <Education />
        <Experience />
        <Skills />
        <Research />
        <Publication />
        <Projects />
        <Coursework />
        <Cocurricular />
        <Achievement />
        <Volunteer />
      </div>
      <Footer />
    </main>
  );
}
