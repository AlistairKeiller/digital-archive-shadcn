import { FaBalanceScale } from "react-icons/fa"; // Import icons from react-icons
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
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
          Hero <FaBalanceScale className="inline-block"></FaBalanceScale> Beggar
        </h1>

        {/* Timeline section */}
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-01">
          The Contradiction
        </h2>

        <div className="mt-6">
          <div className="float-left mr-6 mb-4">
            <Timeline
              items={timelineData}
              imageSize={32}
              gap={16}
            ></Timeline>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Let&apos;s just start by contextualizing Odysseus&apos;s encounter with Polyphemus.
            Odysseus became world-renowned for his success in the Trojan War, but a decade later,
            he became stranded on Scheria with nothing to his name. He needed transport and
            treasure to successfully return to Ithaca, and{" "}
            <Popover>
              <PopoverTrigger className="underline cursor-pointer">
                begging the Phaeacians
              </PopoverTrigger>
              <PopoverContent className="w-96">
                <Image
                  src={Begging}
                  alt="Odysseus begging"
                  className="h-48 object-cover rounded-md mx-auto"
                />
                <p className="text-sm text-center mt-2">
                  Odysseus begging for his safe return to Ithaca. This image depicts Odysseus on
                  his knees, with his hands clasped together, and looked down upon by every
                  Phaeacian. The child, the only one lower than Odysseus, refuses to look up at
                  him. It feels like Odysseus has nothing to lose, and is willing to play all his
                  cards for his own ends.
                </p>
              </PopoverContent>
            </Popover>
            , using stories he constructed, was his only hope.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Therefore, the truth of Odysseus&apos; stories is irrelevant to both parties. Odysseus
            is offering that, in exchange for his stories, he should receive transport and
            treasure. The stories are a means to an end, and the end is to get home.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Odysseus&apos; stories don&apos;t only serve to entertain the Phaeacians into helping
            him; they also prove he is cunning enough to justify a gift and embed parables that
            suggest that it is in the Phaeacians&apos; best interest to help him. The stories that
            Odysseus tells are transcribed as the Odyssey books 9-12, which constructively tells
            the story of Odysseus losing every ship, gift, and treasure he owns over his decade at
            sea.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            As you can see from the timeline on the left, Odysseus&apos; encounter with Polyphemus
            occurs quite early in the epic. At this point, Odysseus is still introducing his
            character to the Phaeacians and building the world and conflicts that the epic revolves
            around.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Throughout his tale, Odysseus needs to resolve quite a contradiction: How can a Greek hero, cunning enough to take
            down a city, and resourceful enough to kill a cyclops with a pole, be so destitute and
            in need of help? How could the hero also be the beggar?
          </p>
          <div className=""></div>
          <h2 className="clear-both mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            What is a Greek Hero?
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
          Hero, or <span className="italic">hērōs</span> is Greek, can <Popover>
              <PopoverTrigger className="underline cursor-pointer">
                  most simply be translated back
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <p className="text-sm text-gray-600">
                  <a
                    href="https://www.perseus.tufts.edu/hopper/text?doc=Perseus%3Atext%3A1999.04.0057%3Aentry%3Dh%28%2Frws"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    ἥρως
                  </a> Henry George Liddell, Robert Scott, <em>A Greek-English Lexicon</em>, on Perseus Digital Library.
                </p>
              </PopoverContent>
            </Popover> to English as a person of divine ancestry or later given divine honors.
          </p>
        </div>
      </div>
    </div>
  );
}

// have a button "help me", that will have a bunch of modern superheros land right under the modern superheros section

// TALK ABOUT THE EVOLUTION OF A HERO OVER TIME??? WHEN WOULD ODYSSEUS HAVE BEEN CONSIDERED A HERO? WHEN WOULD HE HAVE BEEN CONSIDERED A BEGGAR? HOW DOES HE USE HIS STORIES TO NAVIGATE BETWEEN THE TWO?
// How were heros percived and treated by the public over time? Should they be provided respect and help, or should they be left to fend for themselves?
// Talk about "The Boys," (evil hero that abuses the public) and "Batman" (where his entire life is helpign the public, and the public's support is nessesary for his success)

// it's not equivilent exchange, it's more like a tip. It's almost socialist.

// is there a basci kind of just living / being human?

// the oddessey part is the least interesting part. How far can I take it while still focusing on the core values of the course (worldbuilding).

// What recent cases ahve peoples been as accepted as oddessious for such an elaborate tale? What are hte real world impacts of such tails? Any other similar examples?


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
