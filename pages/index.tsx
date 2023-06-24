import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Tooltip } from "flowbite-react";

export default function Home() {
  return (
    <main className="w-full text-whiteboard">
      <Sidebar />
      <div className="ml-72 min-h-screen bg-whiteboard text-midnight flex flex-col p-2">
        <div className="flex h-screen">larged</div>
        <div className="flex h-screen">larged</div>
        <div className="flex h-screen">larged</div>
        <div className="flex h-screen">larged</div>
      </div>
    </main>
  );
}
