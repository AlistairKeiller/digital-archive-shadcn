import { FaCog, FaLightbulb } from "react-icons/fa"; // Import icons from react-icons
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"; // Import HoverCard from shadcn
import Timeline from "@/components/timeline"; // Import Timeline from shadcn
import profilePic from '@/components/profile.jpeg';

export default function Home() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)] bg-gray-100">
      <div className="mt-6 mx-4">
        {/* Title */}
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          The Duality of Odyssey: <br />
          <span className="relative">
            <span>Techn</span>
            {/* Gear for "o" */}
            <span className="inline-block">
              <FaCog className="inline-block" />
            </span>
            <span>logy</span>
          </span>
          &nbsp;&&nbsp;
          <span className="relative">
            <span>W</span>
            {/* Lightbulb for "i" */}
            <span className="inline-block">
              <FaLightbulb className="" />
            </span>
            <span>t</span>
          </span>
        </h1>
        
        <p className="leading-7 mt-6">
          We reexamine the Odyssey through a lens focused on<br />
          Odysseus' rhetoric, and that rhetoric's technological implications.
        </p>
        
        {/* Timeline section */}
        <div className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Burden of Proof
        </div>

        <div className="flex">
          <Timeline images={[profilePic, profilePic, profilePic]} imageSize={64} gap={64}></Timeline>
          <p className="leading-7 mt-6 ml-6">
            Odyssey book 9 transcribes the story that Odysseus tells to the Phaeacians after landing on Scheria.
          </p>
        </div>
      </div>
    </div>
  );
}