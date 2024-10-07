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
import Begging from "@/images/Begging.jpg";
import Image from "next/image";

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
      title: "Odysseus' ship passes the Sirens.",
      description: "Odysseus' ship passes the Sirens.",
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
        <h1 className="scroll-m-20 text-4xl tracking-tight lg:text-5xl text-center">
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

        {/* Timeline section */}
        <div className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight">
          Burden of Proof
        </div>

        <div className="flex mt-6">
          <Timeline items={timelineData} imageSize={32} gap={16}></Timeline>
          <div className="ml-6">
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Let's just start by contextualizing Oddysseus's encounter with Polyphemus.
              Oddysseus became world renowned for his success in the Trojan War, but, a decade later, he had become stranded on Scheria with nothing to his name.
              He needed both transport and treasure so he could sucsessfully return to Ithica, and <HoverCard>
                <HoverCardTrigger className="underline cursor-pointer">begging to the Phaeacians</HoverCardTrigger>
                <HoverCardContent className="w-96">
                  <Image src={Begging} alt="Odysseus begging" className="h-48 object-cover rounded-md mx-auto" />
                  <p className="text-sm text-center mt-2">
                    Odysseus begging for his safe return to Ithaca. This image depicts Odysseus on his knees, with his hands clasped together, and looked down upon by every Phaeacian. The child, the only one lower than Odysseus, refuses to look up at him. It feels like Odysseus has nothing to lose, and is willing to play all his cards for his own ends.
                  </p>
                </HoverCardContent>
              </HoverCard>, using stories he constructed, was his only hope.
              
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Therefore, the truth of Odysseus' stories is irrelevant to both parties. Odysseus is offering that, in exchange for his stories, he should recieve transport and treasure. The stories are a means to an end, and the end is to get home.
            </p>
            <p className="leading-7 [&:not(:first-child)]:mt-6">
              Odysseus' stories don't only serve to entertain the Phaeacians into helping him; they also prove he us cunning enough to justify a gift, and embed parables that suggust that it is in the Phaeacians' best interest to help him.
              The stories that Odysseus tells are transcribed as the Odyssey books 9-12, which constructivly tell the story of Odysseus' losing every ship, gift, and treasure he owns over his decade a sea.
              
            </p>
            </div>
        </div>
      </div>
    </div>
  );
}


// Odysseus telling the stories is an exchange: Odysseus is offering entertainment, proof that he is witty and cunning enough to justfiy a gift, and includes embedded messages that fruther suggust that he should recive gifts, for the end of getting transport and treasure.
// As you can see from the timeline of Odyssey books 9-12, Book 9 and Odysseus' encounter with Polyphemus is only a small introduction to the larger epic.
// The stories Odysseus tells are also constructive. In the end he loses all his men and valuables, which only happens as a cominbation of all the devine entities he angers throughout all of his stories.
// For example, in book 9, he only loses 2 men and to polyphemus, 

// maybe make a quiz of Odysseus' actions, and have two bonus website depending on the users score?

// Analysis of Odysseus' Storytelling Techniques: Explore how Odysseus crafts his narratives to captivate the Phaeacians. Discuss his use of vivid imagery, suspense, and emotional appeals that showcase his rhetorical prowess.
// Specific Examples from Book 9: Incorporate direct quotations or specific passages where Odysseus' cunning and persuasive skills are evident. This will strengthen your points with textual evidence.
// The Concept of Hospitality (Xenia): Delve into the Greek tradition of hospitality and how Odysseus leverages it. Explain how his stories not only entertain but also fulfill social expectations, prompting the Phaeacians to offer assistance.
// Themes of Truth and Deception: Discuss the blurred lines between truth and fiction in Odysseus' tales. Analyze how the effectiveness of his stories does not depend on their factual accuracy but on their ability to achieve his goals.
// Impact on the Phaeacians: Examine how the Phaeacians respond to Odysseus' narratives. Consider their emotions, reactions, and the eventual decision to help him, highlighting the success of his strategy.
// Connection to the Larger Epic: Explain how Book 9 serves as an introduction to Odysseus' adventures recounted in Books 10-12. Discuss how this storytelling session builds anticipation and provides context for his journey.
// Odysseus' Character Development: Analyze what his approach to storytelling reveals about his character traits, such as intelligence, resourcefulness, and understanding of human psychology.
// Cultural and Moral Reflections: Reflect on what Odysseus' actions and the Phaeacians' reactions say about the values and morals of ancient Greek society.
// Comparisons with Other Myths: If relevant, draw parallels between Odysseus' storytelling and similar motifs in other literary works or myths, enhancing the depth of your analysis.

// credit https://www2.classics.upenn.edu/myth/php/homer/index.php?page=timelines
