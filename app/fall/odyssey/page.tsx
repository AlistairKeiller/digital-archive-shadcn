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
import Kleos from "@/images/Kleos.jpg";
import Swan from "@/images/Swan.jpg";
import Nostos from "@/images/Nostos.jpg";
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
          Hero <FaBalanceScale className="inline-block" /> Beggar
        </h1>

        {/* Timeline section */}
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-01">
          The Contradiction
        </h2>

        <div className="mt-6">
          <div className="float-left mr-6 mb-4">
            <Timeline items={timelineData} imageSize={32} gap={16} />
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
            Hero, or <span className="italic">hērōs</span> in Greek, can <Popover>
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
            This is a convenient and simple definition, but one with countless contradictions, including Odysseus the &quot;<Popover>
              <PopoverTrigger className="underline cursor-pointer">
                ingenious hero
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <p className="text-sm text-gray-600">
                  <a
                    href="https://www.gutenberg.org/files/1727/1727-h/1727-h.htm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline">
                    &quot;ingenious hero&quot;
                  </a> from Homer&apos;s Odyssey, translated by Samuel Butler, on Project Gutenberg.
                </p>
              </PopoverContent>
            </Popover>&quot; himself. Odysseus is a widely renowned hero, with no divine blood or specific divine honors to attribute his title to (Athena is his patron, which helps his ends, but isn&apos;t a specific enough award to justify the heroic title by divine definition).
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Instead, I will turn to &quot;The Ancient Greek Hero in 24 Hours&quot; for a more complete picture: Gregory Nagy posits that a hero is defined by their <Popover>
              <PopoverTrigger className="underline cursor-pointer">
                kleos
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <Image
                  src={Kleos}
                  alt="kleos"
                  className="h-48 object-cover rounded-md mx-auto"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  kleos is a Greek word often translated to &quot;glory&quot; or &quot;fame.&quot; It is the concept of what others hear about you, and how you are remembered after you die.
                </p>
              </PopoverContent>
            </Popover>. According to Nagy, Greece was a song culture, with an emphasis on sorrow and death. So a hero&apos;s kleos was proportional to the impact of the song representing their death, also known as their <Popover>
              <PopoverTrigger className="underline cursor-pointer">
                swan song
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <Image
                  src={Swan}
                  alt="Swan"
                  className="h-48 object-cover rounded-md mx-auto"
                />
                <p className="text-sm text-gray-600 text-center mt-2">
                  In Greek mythology, swans were believed to sing a beautiful song just before they died, symbolizing a poignant and memorable end. The &quot;swan song&quot; of a person is considered their &quot;The Living Word,&quot; or the last words that a person perpetuates.
                </p>
              </PopoverContent>
            </Popover>.
            In fact, according to Nagy, &quot;the precise moment when everything comes together for the hero is the moment of death.&quot;
            So there was a massive amount of pressure to &quot;<Popover>
              <PopoverTrigger className="underline cursor-pointer">
                Script
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <p className="text-sm text-gray-600">
                  A hero is considered <span className="italic">unseasonal</span> for their entire lifetime, so &quot;scripting&quot; their death is all about nailing the timing to have a <span className="italic">seasonal</span>/heroic death. The underlying etymology of <span className="italic">hērōs</span> that justify this fact is unbelievably insightful, but also beyond the scope of this post, but I deeply encourage you to read Hero in 24 Hours!!
                </p>
              </PopoverContent>
            </Popover>&quot; one&apos;s dying words to create a lasting legacy, and immortalize themselves as a hero.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Although Greek kleos is often derived from their swan song, Odysseus&apos; perpetuated song is his <Popover>
              <PopoverTrigger className="underline cursor-pointer">
                nostos
              </PopoverTrigger>
              <PopoverContent className="w-64 p-4">
                <Image
                  src={Nostos}
                  alt="nostos"
                  className="h-48 object-cover rounded-md mx-auto"
                />
                <p className="text-sm text-center text-gray-600">
                  Nostos is a Greek word meaning &quot;homecoming&quot; or &quot;return.&quot; It refers to the hero&apos;s journey back home after a long adventure, often filled with trials and tribulations.
                </p>
              </PopoverContent>
            </Popover>:
          </p>
          <div className="flex mx-auto justify-center [&:not(:first-child)]:mt-6">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/G5ujW4tTRxw?si=Od8p0GqLijoF8Ibz" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/xGZ4vLNmGAU?si=1ejzKUP5DcVGal6I" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-01">
          Solving the contradiction
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The simple solution to the contradiction is that Odysseus wasn't a hero when he was begging the Phaeacians, he only became a hero when he returned to Ithaca (which created his <span className="italic">nostos</span>, and therefore his <span className="italic">hērōs</span>).
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          But I feel like that sidesteps the more fundemental issue. My immediate thought was: "Odysseus is a hero, therefore he cannot be a desperate begger, because he is strong, smart, and powerful enough."
          I think that's a bias coming from the western construction of a hero/superhero, in which after achiving their powers (ie. after Odysseus concers troy, becomes famous and poweful), they should forever be a hero and never fall to the same level as a civilian/begger.
          This would be similar to a greek hero achiving devine status, and then never being able to fall from grace. However, as we saw, kleos is indifferent to people's status or inherent superiority to the average population; it only concers legacy and remembrance.
        </p>
      </div>
    </div>
  );
}

// have a button "help me", that will have a bunch of modern superheros land right under the modern superheros section

// TALK ABOUT THE EVOLUTION OF A HERO OVER TIME??? WHEN WOULD ODYSSEUS HAVE BEEN CONSIDERED A HERO? WHEN WOULD HE HAVE BEEN CONSIDERED A BEGGAR? HOW DOES HE USE HIS STORIES TO NAVIGATE BETWEEN THE TWO?
// How were heros percived and treated by the public over time? Should they be provided respect and help, or should they be left to fend for themselves?
// Talk about "The Boys," (evil hero that abuses the public) and "Batman" (where his entire life is helpign the public, and the public's support is nessesary for his success)

// credit https://www2.classics.upenn.edu/myth/php/homer/index.php?page=timelines
