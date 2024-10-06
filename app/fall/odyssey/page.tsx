import { FaCog, FaLightbulb } from "react-icons/fa"; // Import icons from react-icons
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card"; // Import HoverCard from shadcn
import Timeline from "@/components/timeline"; // Import Timeline from shadcn
import Cicones from "@/images/Cicones.webp";
import Lotus from "@/images/Lotus.jpg";
import Polyphemus from "@/images/Polyphemus.png";
import Winds from "@/images/Winds.jpg";
import Laistrygones from "@/images/Laistrygones.jpg";
import Circe from "@/images/Circe.jpg";
import Sirens from "@/images/Sirens.jpg";
import Scylla from "@/images/Scylla.jpg";
import Cattle from "@/images/Cattle.jpg";
import Zeus from "@/images/Zeus.jpg";
import Calypso from "@/images/Calypso.jpg";

export default function Home() {
  // Define the timeline data
  const timelineData = [
    {
      image: Cicones,
      title: "Odysseus and his men raid the Cicones.",
      description: "Odysseus and his men raid the Cicones.",
    },
    {
      image: Lotus,
      title: "They arrive at the Land of the Lotus Eaters.",
      description: "They arrive at the Land of the Lotus Eaters.",
    },
    {
      image: Polyphemus,
      title: "Odysseus blinds Polyphemus.",
      description: "Odysseus blinds Polyphemus.",
    },
    {
      image: Winds,
      title: "Aiolos gives Odysseus the bag of winds.",
      description: "Aiolos gives Odysseus the bag of winds.",
    },
    {
      image: Laistrygones,
      title: "The Laistrygones destroy 11 ships.",
      description: "The Laistrygones destroy 11 ships.",
    },
    {
      image: Circe,
      title: "Circe turns the crew into swine.",
      description: "Circe turns the crew into swine.",
    },
    {
      image: Sirens,
      title: "Odysseus's ship passes the Sirens.",
      description: "Odysseus's ship passes the Sirens.",
    },
    {
      image: Scylla,
      title: "Odysseus passes between Scylla and Charybdis.",
      description: "Odysseus passes between Scylla and Charybdis.",
    },
    {
      image: Cattle,
      title: "The crew slaughters Helios' cattle.",
      description: "The crew slaughters Helios' cattle.",
    },
    {
      image: Zeus,
      title: "Zeus kills everyone but Odysseus.",
      description: "Zeus kills everyone but Odysseus.",
    },
    {
      image: Calypso,
      title: "Odysseus arrives on Calypso's island.",
      description: "Odysseus arrives on Calypso's island.",
    },
  ];

  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)] bg-gray-100">
      <div className="mt-6 mx-4 max-w-3xl">
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
          We reexamine the Odyssey through a lens focused on
          <br />
          Odysseus' rhetoric, and that rhetoric's technological implications.
        </p>

        {/* Timeline section */}
        <div className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Burden of Proof
        </div>

        <div className="flex mt-6">
          <Timeline items={timelineData} imageSize={32} gap={16}></Timeline>
          <div className="ml-6">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Odyssey book 9 is one of four books transcribing the story that
              Odysseus tells to the Phaeacians after landing on Scheria. 
              Odysseus, although famous for his success in the Trojan War, is unknown to the Phaeacians.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// credit https://www2.classics.upenn.edu/myth/php/homer/index.php?page=timelines
