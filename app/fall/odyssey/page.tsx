import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { FaCog, FaLightbulb } from "react-icons/fa"; // Import icons from react-icons

export default function Home() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)] bg-gray-100">
      <div className="mt-6 mx-4">
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
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          We rexamine the Odyssey though a lens focused on<br />
          Odysseus' rhetoric, and that rhetoric's technological implications.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Burdon of Proof
        </h2>
        <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1" key="item-1">
              <AccordionTrigger>Odysseus and his men raid the Cicones</AccordionTrigger>
              <AccordionContent>
                Odysseus and his men raid the city of the Cicones after leaving Troy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>They arrive at the Land of the Lotus Eaters</AccordionTrigger>
              <AccordionContent>
                The crew is tempted by the Lotus Eaters, who offer them fruit that makes them forget home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Odysseus blinds Polyphemus</AccordionTrigger>
              <AccordionContent>
                Odysseus outwits the Cyclops Polyphemus by blinding him and escaping his cave.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Aiolos gives Odysseus the bag of winds</AccordionTrigger>
              <AccordionContent>
                Aiolos, the god of winds, gives Odysseus a bag containing all the winds except the west wind.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Odysseus nearly reaches Ithaca</AccordionTrigger>
              <AccordionContent>
                The crew opens the bag of winds, thinking it contains treasure, and blows them far from Ithaca.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>The Laistrygones destroy 11 ships</AccordionTrigger>
              <AccordionContent>
                The Laistrygones, a race of giants, destroy 11 of Odysseus' ships, leaving only his own.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Circe turns the crew into swine</AccordionTrigger>
              <AccordionContent>
                The sorceress Circe turns Odysseus' men into pigs but eventually helps him.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Odysseus visits Teiresias in the Underworld</AccordionTrigger>
              <AccordionContent>
                Odysseus travels to the Underworld to seek the advice of the prophet Teiresias.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>Odysseus's ship passes the Sirens</AccordionTrigger>
              <AccordionContent>
                Odysseus orders his men to plug their ears while he listens to the Sirens' seductive song.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Odysseus passes between Scylla and Charybdis</AccordionTrigger>
              <AccordionContent>
                Odysseus navigates the strait between the monster Scylla and the whirlpool Charybdis.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11">
              <AccordionTrigger>The crew slaughters Helios' cattle</AccordionTrigger>
              <AccordionContent>
                Despite warnings, the crew kills Helios' sacred cattle, leading to their doom.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12">
              <AccordionTrigger>Zeus kills everyone but Odysseus</AccordionTrigger>
              <AccordionContent>
                Zeus punishes the crew for slaughtering Helios' cattle, killing everyone except Odysseus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13">
              <AccordionTrigger>Odysseus arrives on Calypso's island</AccordionTrigger>
              <AccordionContent>
                Odysseus is washed ashore on Calypso's island, where she holds him captive for years.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-14">
              <AccordionTrigger>Council of the gods. Athena bargains with Zeus</AccordionTrigger>
              <AccordionContent>
                Athena persuades Zeus to free Odysseus from Calypso’s island.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-15">
              <AccordionTrigger>Athena visits Telemachus; he sails for Pylos</AccordionTrigger>
              <AccordionContent>
                Athena visits Telemachus and encourages him to search for his father by sailing to Pylos.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-16">
              <AccordionTrigger>Telemachus reaches Pylos, then sails to Sparta</AccordionTrigger>
              <AccordionContent>
                Telemachus travels to Pylos and then to Sparta to gather information about his father.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-17">
              <AccordionTrigger>King Menelaus receives Telemachus</AccordionTrigger>
              <AccordionContent>
                King Menelaus of Sparta warmly receives Telemachus and shares news of Odysseus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-18">
              <AccordionTrigger>Second council of gods. Calypso frees Odysseus</AccordionTrigger>
              <AccordionContent>
                After a second council of the gods, Calypso is forced to release Odysseus.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-19">
              <AccordionTrigger>Poseidon destroys Odysseus' raft</AccordionTrigger>
              <AccordionContent>
                Poseidon, still angry with Odysseus, wrecks his raft as he attempts to sail home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-20">
              <AccordionTrigger>Odysseus lands on Scheria and meets Nausicaa</AccordionTrigger>
              <AccordionContent>
                Odysseus washes up on the island of Scheria, where he meets the princess Nausicaa.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
      </div>
    </div>
    
  );
}
