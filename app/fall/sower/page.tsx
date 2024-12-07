"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import flamingText from "@/images/flamingtext.gif";
import minecraftLibrary from "@/images/minecraft_library.avif";
import shapeGod from "@/images/ShapeGod.png";
import localFont from "next/font/local";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import OASIS from "@/images/OASIS.webp";
import ATLAGenocide from "@/images/atla_genocide.jpg";
import SowerGenocide from "@/images/sower_genocide.png";
import { GripVertical } from "lucide-react";

const Monocraft = localFont({
  src: "../../fonts/Monocraft.otf",
});

const atla = localFont({
  src: "../../fonts/Avatar Airbender.ttf",
});

export default function Sower() {
  const [showVideo, setShowVideo] = useState(true);

  useEffect(() => {
    const cachedShowVideo = localStorage.getItem("showVideo");
    if (cachedShowVideo !== null) {
      setShowVideo(JSON.parse(cachedShowVideo));
    }
  }, []);

  const videoRef = useRef<HTMLVideoElement>(null);

  const [animationStep, setAnimationStep] = useState(0);

  useEffect(() => {
    const cachedAnimationStep = localStorage.getItem("animationStep");
    if (cachedAnimationStep !== null) {
      setAnimationStep(parseInt(cachedAnimationStep, 10));
    }
  }, []);

  const handleButtonClick = () => {
    if (animationStep === 0) {
      setAnimationStep(1);
    }
  };

  useEffect(() => {
    if (animationStep === 1) {
      setTimeout(() => setAnimationStep(2), 500);
    } else if (animationStep === 2) {
      setTimeout(() => setAnimationStep(3), 500);
    } else if (animationStep === 3) {
      videoRef.current?.play();
    }
    localStorage.setItem("animationStep", animationStep.toString());
  }, [animationStep]);

  useEffect(() => {
    localStorage.setItem("showVideo", JSON.stringify(showVideo));
  }, [showVideo]);

  // State and handlers for the before/after slider
  const [insetGenocide, setInsetGenocide] = useState<number>(50);
  const [onMouseDownGenocide, setOnMouseDownGenocide] =
    useState<boolean>(false);

  const onMouseMoveGenocide = (
    e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>
  ) => {
    if (!onMouseDownGenocide) return;

    const target = e.currentTarget;
    const rect = target.getBoundingClientRect();
    let x = 0;

    if ("touches" in e && e.touches.length > 0) {
      x = e.touches[0].clientX - rect.left;
    } else if ("clientX" in e) {
      x = e.clientX - rect.left;
    }

    const percentage = (x / rect.width) * 100;
    setInsetGenocide(Math.min(Math.max(percentage, 0), 100));
  };

  return (
    <div className="relative flex justify-center min-h-[calc(100vh-69px)]">
      {showVideo && (
        <div className="absolute inset-0 z-10">
          <video
            src="/fire.webm"
            ref={videoRef}
            muted
            onEnded={() => setShowVideo(false)}
            className={`w-full h-[calc(100vh-69px)] object-cover ${
              animationStep < 3 ? "bg-white" : ""
            }`}
          />
        </div>
      )}
      {animationStep < 3 && (
        <div className="absolute inset-0 z-20 h-[calc(100vh-69px)] w-screen flex items-center justify-center">
          <button
            onClick={handleButtonClick}
            className={`p-6 rounded-full text-9xl transition-colors duration-500 ${
              animationStep >= 1
                ? "bg-transparent"
                : "bg-red-600 hover:bg-red-500 shadow-xl hover:shadow-2xl"
            }`}
          >
            <span
              className={`transition-opacity duration-500 ${
                animationStep >= 2 ? "opacity-0" : ""
              }`}
            >
              🔥
            </span>
          </button>
        </div>
      )}
      <div
        className={`mx-4 max-w-3xl relative ${
          showVideo ? "h-[calc(100vh-69px)] overflow-hidden" : ""
        }`}
      >
        <Image src={flamingText} alt="Flaming Text" className="mx-auto" />
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          Earthseed 🌱
        </h2>
        <Image
          src={shapeGod}
          alt="Shape God"
          className="float-right m-6 rounded-sm"
          width={200}
        />
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Octavia Butler&apos;s{" "}
          <span className="italic">Parable of the Sower</span> reflects a
          dystopian future where the world is ravaged by climate change,
          corporate greed, and economic inequality. We follow Lauren Olamina,
          who is crippled by hyperempathy, a result of the prolific drug use of
          her mother during pregnancy. Lauren is a visionary who creates a new
          religion called Earthseed, which is based on the idea that &quot;God
          is Change.&quot;
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          &quot;God is Change&quot; is the beating heart of the novel. It
          reflects the state of the dystopian society; the generations before
          did not care enough about the impact on their world, leaving global
          warming &apos;for later,&apos; and this generation with debilitating
          generational debt. This can result from the non-consequentialist
          attitude of a Baptist minister, who believes that God starts,
          overlooks, and maintains a balance, and all one needs to do is act
          morally and in His world.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This removes much of the responsibility from individuals, as it&apos;s
          not up to them to ensure that things like global warming and drug use
          stay under control. The concept of &quot;God is Change&quot; is a
          stark contrast to the non-consequentialist view of God, as it places
          the responsibility of change on the individual. &quot;God is
          Change&quot; is bidirectional in the sense it is equivalent to
          &quot;Change is God.&quot; This means that we, mere humans, have the
          power, and therefore responsibility, to &quot;Shape God.&quot;
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="italic">Parable of the Sower</span> not only creates
          a new world but develops a worldview tailored to that world. The
          worldview and world are both so carefully designed as a dystopian
          vision that they accurately portray many people&apos;s thoughts about
          the present and future, as seen by{" "}
          <Link href={"https://godischange.org/about/"} className="underline">
            those who worship Earthseed
          </Link>{" "}
          as a real religion.
        </p>

        <h2
          className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 first:mt-0 ${Monocraft.className}`}
        >
          Minecraft!!!!
        </h2>
        <iframe
          src="https://eaglercraft.com/mc/1.8.8-wasm/"
          className="w-full aspect-video [&:not(:first-child)]:mt-6"
        ></iframe>
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 ${Monocraft.className}`}
        >
          From{" "}
          <Link href="https://classic.minecraft.net/" className="underline">
            {" "}
            the very start
          </Link>
          , Minecraft has been about creating a world. Just look at the order of
          development! Building, exploration, and game mechanics always preceded
          health, hunger, and survival. Minecraft is unique and timeless to me
          because it is not about winning, surviving, or competing; just about
          playing, whatever that means to the player.
        </p>
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 ${Monocraft.className}`}
        >
          Creative has all the of the core gameplay: players can make whatever
          they want, with no concern about gathering materials. People spend
          years building worlds that are a reflection of their own, and it can
          even be used as a critical source of information, namely{" "}
          <Link
            href="https://www.uncensoredlibrary.com/en"
            className="underline"
          >
            The Minecraft Uncensored Library
          </Link>
          .
        </p>
        <div
          className={`mx-auto my-6 sm:float-right sm:mx-6 w-11/12 sm:w-1/2 ${Monocraft.className}`}
        >
          <Image
            src={minecraftLibrary}
            alt="Minecraft Library"
            className="rounded-sm w-max"
          />
          <div className="text-center">The Minecraft Uncensored Library</div>
        </div>
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 ${Monocraft.className}`}
        >
          Survival is not about surviving since death is temporary and
          inconsequential. Instead, it adds another aspect of resource
          management and restriction that adds depth to the world. In creative,
          you could have houses made of diamond blocks that are more ubiquitous
          than wood and not a single mine to source those diamonds. In creative,
          the functionality of farms is moot, so they are uncommon at best.
          Survival adds realism (even in a world as absurd, blocky, and
          unrealistic as Minecraft). In survival, people optimize resource
          production with automatic farms, build massive redstone contraptions,
          and excavate/terraform entire biomes for resources and beautification.
          It feels like a reflection of modern first-world capitalist society,
          as the player selfishly shapes the world around him to his own needs
          when those needs are just self-imposed, completely unrelated to an
          objective measure of success (since &quot;beating&quot; the game, by
          beating the ender dragon, is trivial, and is almost never a survival
          player&apos;s final objective).
        </p>
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 ${Monocraft.className}`}
        >
          Finally, Hardcore is a reflection of us, living life itself. It is
          equivalent to survival in all the ways mentioned above; people build,
          farm, and create their projects and goals to feel fulfilled. However,
          death is permanent and always looming. There is no player that is
          safe; that was made abundantly clear to the world after{" "}
          <Link
            href="https://www.youtube.com/watch?v=C0B-y61mn8g"
            className="underline"
          >
            {" "}
            Philza&apos;s 5-year (1700 hours of playtime) harcore world ended
            abruptly
          </Link>
          . &quot;Everything I did, everything I made, could just be gone in a
          flash&quot; - Philza.
        </p>
        <iframe
          className="mx-auto w-full [&:not(:first-child)]:mt-6"
          height="315"
          src="https://www.youtube.com/embed/YzaStuZnHBc?si=dfafP7I2fYg6fEb9&amp;start=84"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 ${Monocraft.className}`}
        >
          This is not just a philosophy that applies to Minecraft. It is akin to
          real philosophies and can apply to the real world: &quot;When it comes
          to either/or, there is only the quick choice of death. It is not
          particularly difficult. Be determined and advance&quot; - Yamamoto
          Tsunetomo. Hardcore players can explore this, explore the feeling of
          loss, get lost in the adrenaline of risk, and experience the loss of
          their world, all of which is an equivalent experience to the real
          world. They can inform their life and use Minecraft as their
          otherwordly escape, like the{" "}
          <Popover>
            <PopoverTrigger asChild>
              <span className="underline cursor-pointer">OASIS</span>
            </PopoverTrigger>
            <PopoverContent className="w-96">
              <Image
                src={OASIS}
                alt="the OASIS"
                className="h-48 object-cover rounded-md mx-auto"
              />
              <p className="text-sm text-center mt-2">
                The OASIS is a virtual world in Ready Player One, where people
                can escape from the real world and live their lives in a
                completely different world. It controls the economy, social, and
                political structures of the world in Ready Player One.
              </p>
            </PopoverContent>
          </Popover>{" "}
          from Ready Player One, but more blocky and abstract. In Minecraft,
          they can explore and use that to build a world that informs how they
          experience their own.
        </p>
        <p
          className={`leading-7 [&:not(:first-child)]:mt-6 ${Monocraft.className}`}
        >
          A hardcore player of Minecraft feels loosely akin to a reader
          exploring religion by reading Lauren&apos;s world and Earthseed! Both
          the reader of <span className="italic">Parable of the Sower</span> and
          the player of Minecraft can explore those worlds and use those worlds
          as a sandbox to explore and reform their own philosophies and
          worldviews. The worlds are both alien in some sense but largely
          resemble our own (<span className="italic">Parable of the Sower</span>{" "}
          is a dystopian future, with major elements, like the drugs described
          and global, being reflections of our own current issues. Minecraft, on
          the other hand, is a more abstract, interactive system that explores
          human desire, resource management, and social/political
          constructions).
        </p>
        <h2
          className={`scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 first:mt-0 ${atla.className}`}
        >
          Avatar: The Last Airbender
        </h2>
        <div
          className="mx-auto mt-6 relative aspect-video w-full h-auto overflow-hidden rounded-md border select-none"
          onMouseMove={onMouseMoveGenocide}
          onMouseUp={() => setOnMouseDownGenocide(false)}
          onTouchMove={onMouseMoveGenocide}
          onTouchEnd={() => setOnMouseDownGenocide(false)}
        >
          <div
            className="bg-muted h-full w-1 absolute z-20 top-0 -ml-1"
            style={{
              left: insetGenocide + "%",
            }}
          >
            <button
              className="bg-muted rounded hover:scale-110 transition-all w-5 h-10 select-none -translate-y-1/2 absolute top-1/2 -ml-2 z-30 cursor-ew-resize flex justify-center items-center"
              onTouchStart={(e) => {
                setOnMouseDownGenocide(true);
                onMouseMoveGenocide(e);
              }}
              onMouseDown={(e) => {
                setOnMouseDownGenocide(true);
                onMouseMoveGenocide(e);
              }}
              onTouchEnd={() => setOnMouseDownGenocide(false)}
              onMouseUp={() => setOnMouseDownGenocide(false)}
            >
              <GripVertical className="h-4 w-4 select-none" />
            </button>
          </div>
          <Image
            src={ATLAGenocide}
            alt="ATLA genocide"
            fill
            className="absolute left-0 top-0 z-10 object-cover"
            style={{
              clipPath: `inset(0 0 0 ${insetGenocide}%)`,
            }}
          />
          <Image
            src={SowerGenocide}
            alt="Sower genocide"
            fill
            className="absolute left-0 top-0 object-cover"
          />
        </div>

        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Reading <span className="italic">Parable of the Sower</span> caught my
          attention because of the striking similarity (and also some stark
          differences). While Lauren struggles to defend herself due to her
          hyperempathy, Aang struggles to defend himself due to his pacifism,
          based both on his religious ideals and his feeling of overwhelming
          responsibility and guilt. In short, the fire nation desires world
          domination, while The Avatar (Aang) represents the natural state and
          balance in the world. The Fire Nation, blinded by their technological
          advancements and greed, started a war for world domination and wiped
          out the entire air nation to prevent The Avatar from being born, and
          balance was maintained. Aang was trapped in ice for the entire
          duration of the war (because he was overwhelmed with his
          responsibilities), and we wake up to a world where his people are
          extinct and could not be less balanced.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          As a Buddhist and a pacifist, Aang can&apos;t even bring himself to
          kill in self-defense or to destabilize The Fire Nation, even though
          other avatars and Buddhists believe and are adamant that it is the
          only way to restore balance. Aang eventually solves it by unlocking a
          new form of bending (no more spoilers!).
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Aang&apos;s predicament is similar to Lauren&apos;s in that they are
          both aversed to killing and inflicting pain in a world where it seems
          like the only way. From their perspective, they view themselves as
          weak, crippled, and inadequate for their abnormality. But their
          difference allows them to present a unique worldview and solve
          problems in new ways, oftentimes that the world needs. I have not read
          the outcome of Earthseed through{" "}
          <span className="italic">Parable of the Talents</span>, but it&apos;s
          clearly a movement that philosophically aligns with the buildings,
          care, and responsibility that Lauren&apos;s world so desperately
          needs.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          One stark difference is the threats that they propose humanity has to
          itself. In ATLA, the Fire Nation&apos;s rise to power represents
          social injustices and economic inequality created by rapid
          technological progress. It is saying that, in the wrong hands, it
          could create an all-powerful dictatorship (a reflection of a scenario
          where the Soviet Union wins the war and becomes the most
          technologically advanced nation).{" "}
          <span className="italic">Parable of the Sower</span> presents a much
          more nuanced concern about the future. The destruction Lauren sees
          (both her hyperempathy and what she loses) is a result of drug misuse
          and overdoes (with Pyro and Paracetco). In this comparison, it&apos;s
          almost comical how non-influential drugs are in ATLA; its main
          explicit drug use is purely a comedic relief to their desert journey.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 first:mt-0">
          Some Virtual Introspection (Conclusion)
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The concept of &quot;God is Change&quot; in a dystopian is the theme
          of this website. To get here, you had to burn down an entire blank
          page, with no way to get it back (or at least not with a simple
          refresh)! I built this as the best reflection I could of both
          hyperempathy and Earthseed, which is basically Lauren&apos;s life.
          Imagine I put a Dog on the first page! I am not evil enough to build
          such a depiction, and I hope you wouldn&apos;t press that button
          either! Was viewing this website worth burning the page? Would it be
          worth burning a virtual dog?
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Everyone has to be the change they want to see (however cliche that
          sounds), even if it&apos;s hard or near impossible to carry out (like
          Lauren killing for what&apos;s right and her own survival and
          effectively feeling death in the process). You participated in the
          study of destroying one thing to see another, and we all do it all the
          time, every day, even if we don&apos;t see it. I think Earthseed, this
          website, <span className={`${Monocraft.className}`}>Minecraft</span>,
          and{" "}
          <span className={`${atla.className}`}>
            Avatar: The Last Airbender
          </span>
          , and <span className="italic">Parable of the Sower</span> are all
          exploring this same concept in a more explicit sense.
        </p>
      </div>
    </div>
  );
}
