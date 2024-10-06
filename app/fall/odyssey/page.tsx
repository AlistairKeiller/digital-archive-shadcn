import { FaCog, FaLightbulb } from "react-icons/fa"; // Import icons from react-icons
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card"; // Import HoverCard from shadcn

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

        <p className="leading-7 mt-6">
          Odyssey book 9 transcribes the story that Odysseus tells to the Phaeacians after landing on Scheria.
        </p>
        
        <div className="flex overflow-x-auto space-x-8 mt-8">
          {/* Timeline items with hover cards */}
          
          <HoverCardItem title="Raid the Cicones" description="Odysseus and his men raid the city of the Cicones after leaving Troy." />
          <HoverCardItem title="Land of the Lotus Eaters" description="The crew is tempted by the Lotus Eaters, who offer them fruit that makes them forget home." />
          <HoverCardItem title="Blinding Polyphemus" description="Odysseus outwits the Cyclops Polyphemus by blinding him and escaping his cave." />
          <HoverCardItem title="Bag of Winds" description="Aiolos, the god of winds, gives Odysseus a bag containing all the winds except the west wind." />
          <HoverCardItem title="Nearly reaches Ithaca" description="The crew opens the bag of winds, thinking it contains treasure, and blows them far from Ithaca." />
          <HoverCardItem title="Laistrygones destroy ships" description="The Laistrygones, a race of giants, destroy 11 of Odysseus' ships, leaving only his own." />
          <HoverCardItem title="Circe turns crew into swine" description="The sorceress Circe turns Odysseus' men into pigs but eventually helps him." />
          <HoverCardItem title="Visits Teiresias in the Underworld" description="Odysseus travels to the Underworld to seek the advice of the prophet Teiresias." />
          <HoverCardItem title="Passes the Sirens" description="Odysseus orders his men to plug their ears while he listens to the Sirens' seductive song." />
          <HoverCardItem title="Scylla and Charybdis" description="Odysseus navigates the strait between the monster Scylla and the whirlpool Charybdis." />
          <HoverCardItem title="Slaughters Helios' cattle" description="Despite warnings, the crew kills Helios' sacred cattle, leading to their doom." />
          <HoverCardItem title="Zeus kills crew" description="Zeus punishes the crew for slaughtering Helios' cattle, killing everyone except Odysseus." />
          <HoverCardItem title="Odysseus on Calypso's island" description="Odysseus is washed ashore on Calypso's island, where she holds him captive for years." />
          <HoverCardItem title="Council of the gods" description="Athena persuades Zeus to free Odysseus from Calypso’s island." />
          <HoverCardItem title="Telemachus sails for Pylos" description="Athena encourages Telemachus to search for his father by sailing to Pylos." />
          <HoverCardItem title="Telemachus reaches Sparta" description="Telemachus travels to Pylos and then to Sparta to gather information about his father." />
          <HoverCardItem title="Menelaus receives Telemachus" description="King Menelaus of Sparta warmly receives Telemachus and shares news of Odysseus." />
          <HoverCardItem title="Calypso frees Odysseus" description="After a second council of the gods, Calypso is forced to release Odysseus." />
          <HoverCardItem title="Poseidon wrecks raft" description="Poseidon, still angry with Odysseus, wrecks his raft as he attempts to sail home." />
          <HoverCardItem title="Odysseus meets Nausicaa" description="Odysseus washes up on the island of Scheria, where he meets the princess Nausicaa." />
        </div>
      </div>
    </div>
  );
}

// Custom HoverCardItem component
interface HoverCardItemProps {
  title: string;
  description: string;
}

function HoverCardItem({ title, description }: HoverCardItemProps) {
  return (
    <HoverCard>
      <HoverCardTrigger>
        <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 text-white">
          {/* Timeline marker */}
          <span className="text-xl font-semibold">{title[0]}</span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-64">
        <h3 className="font-bold">{title}</h3>
        <p className="mt-2 text-sm">{description}</p>
      </HoverCardContent>
    </HoverCard>
  );
}
