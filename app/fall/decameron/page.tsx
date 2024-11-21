"use client";

import React, { useRef, useEffect, useState } from "react";
import isengaurd from "@/images/IMG_0025.jpeg";
import towers from "@/images/IMG_0031.jpeg";
import calmindon_outside from "@/images/IMG_0024.jpeg";
import calmindon from "@/images/Calmindon.jpeg";
import calmindon_lightswitch from "@/images/Calmindon_switch.jpeg";
import vs from "@/images/Street_Fighter_VS_logo.png";
import swing from "@/images/swing.jpeg";
import F1tenth from "@/images/F1tenth.jpeg";
import UAV from "@/images/UAV.jpeg";
import ZIMS from "@/images/ZIMS.jpeg";
import ACE from "@/images/ACE.jpeg";
import ACE_model from "@/images/ACE_model.png";
import ACE_chassis from "@/images/ACE_chassis.jpeg";
import F1tenth_car from "@/images/F1tenth_car.jpeg";
import lofiGirl from "@/images/lofi.gif";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Decameron() {
  // Reference to the "Calmindon" section
  const calmindonRef = useRef<HTMLHeadingElement>(null);
  // Reference to the audio object
  const audioRef = useRef<HTMLAudioElement | null>(null);
  // Reference to the fade interval
  const fadeIntervalRef = useRef<number | null>(null);
  // State to track the audio volume and image opacity
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const calmindonSection = calmindonRef.current;
    if (!calmindonSection) return;

    // Fade in function
    const fadeIn = (audio: HTMLAudioElement, duration: number) => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      audio.volume = 0;
      setVolume(0);
      audio.play();

      const volumeIncrement = 1 / (duration / 100);

      fadeIntervalRef.current = window.setInterval(() => {
        if (audio.volume < 1) {
          audio.volume = Math.min(audio.volume + volumeIncrement, 1);
          setVolume(audio.volume);
        } else {
          clearInterval(fadeIntervalRef.current!);
          fadeIntervalRef.current = null;
          setVolume(1);
        }
      }, 100);
    };

    // Fade out function
    const fadeOut = (audio: HTMLAudioElement, duration: number) => {
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }

      const volumeDecrement = 1 / (duration / 100);

      fadeIntervalRef.current = window.setInterval(() => {
        if (audio.volume > 0) {
          audio.volume = Math.max(audio.volume - volumeDecrement, 0);
          setVolume(audio.volume);
        } else {
          audio.pause();
          clearInterval(fadeIntervalRef.current!);
          fadeIntervalRef.current = null;
          setVolume(0);
        }
      }, 100);
    };

    // Callback function for the Intersection Observer
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play the music with fade-in when the section is in view
          if (!audioRef.current) {
            audioRef.current = new Audio("/lofi.mp3");
            audioRef.current.loop = true; // Loop the music
          }
          fadeIn(audioRef.current, 2000); // Fade in over 2 seconds
        } else {
          // Pause the music with fade-out when the section is out of view
          if (audioRef.current) {
            fadeOut(audioRef.current, 2000); // Fade out over 2 seconds
          }
        }
      });
    };

    // Create the Intersection Observer
    const observer: IntersectionObserver = new IntersectionObserver(
      handleIntersection,
      {
        threshold: 0.5,
      }
    );

    observer.observe(calmindonSection);

    return () => {
      if (observer && calmindonSection) {
        observer.unobserve(calmindonSection);
      }
      if (fadeIntervalRef.current) {
        clearInterval(fadeIntervalRef.current);
      }
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed inset-0 z-0">
        <Image
          src={lofiGirl}
          alt="Lofi Girl"
          layout="fill"
          objectFit="cover"
          style={{ opacity: volume / 10.0 }}
        />
      </div>

      <div className="flex justify-center min-h-[calc(100vh-69px)] relative z-10">
        <div className="mt-6 mx-4 max-w-3xl">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">
            <div>
              Nesting{` `}
              <div className="text-box inline-block relative">
                <div className="inline-block absolute rotate-[-90] opacity-0">
                  Worlds
                </div>
                <div className="inline-block absolute rotate-[-90] opacity-0">
                  Worlds
                </div>
                <div className="inline-block absolute rotate-[-90] opacity-0">
                  Worlds
                </div>
              </div>
              <div className="inline-block min-w-28 lg:min-w-40"></div>
            </div>
          </h1>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            The Decameron&apos;s Worldbuilding
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The Decameron&apos;s world builds itself in every story, between
            every storyteller and through the author. The deeply nested series
            of fictional storytellers each with their own motives,
            relationships, and personalities, give each word a myriad of
            implications in a deeply entangled web of connected worlds.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The bidirectional communication between layers of worlds was the
            most impactful insight that Dr. Shemek&apos;s lectures had on me.
            It&apos;s not that a story informs us about the characters and what
            the characters represent or that the character&apos;s personalities
            can give us insight into the story. Instead, Boccaccio uses the
            stories, the character he decides should tell each story, the
            author, the author&apos;s comments, and every other word in the book
            to his arguments and justify his claims.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This sounds surprisingly mundane when typed out, but I promise that,
            in my head, the number of connections I am making and relationships
            I am considering is far to overwhelming and profound to transcribe
            in a five minute read.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Just in one example, consider the very first story told on Day One
            (and then imagine the page covered with arrows like a crime board
            connecting the ideas in each of these):
          </p>
          <div className="flex flex-col items-center justify-center [&:not(:first-child)]:mt-6">
            {/* Outer Container */}
            <div className="border-4 border-blue-500 p-8 rounded-lg bg-white hover:shadow-2xl transition-shadow">
              <h1 className="text-blue-500 text-lg font-bold mb-4 text-center">
                1. Day One, Story One
              </h1>

              {/* Nested Container Level 2 */}
              <div className="border-4 border-gray-500 p-6 rounded-lg bg-white hover:shadow-2xl transition-shadow">
                <h2 className="text-gray-700 font-semibold mb-4 text-center">
                  2. Panfilo&apos;s narrative choice
                </h2>

                {/* Nested Container Level 3 */}
                <div className="border-4 border-gray-400 p-5 rounded-lg bg-white hover:shadow-2xl transition-shadow">
                  <h3 className="text-gray-600 font-medium mb-4 text-center">
                    3. Ser Ciappelletto&apos;s deception
                  </h3>

                  {/* Nested Container Level 4 */}
                  <div className="border-4 border-gray-300 p-4 rounded-lg bg-white hover:shadow-2xl transition-shadow">
                    <h4 className="text-gray-500 font-medium mb-4 text-center">
                      4. The false confession
                    </h4>

                    {/* Nested Container Level 5 */}
                    <div className="border-4 border-gray-200 p-3 rounded-lg bg-white hover:shadow-2xl transition-shadow">
                      <h5 className="text-gray-400 font-medium mb-2 text-center">
                        5. The sanctification of a sinner
                      </h5>
                    </div>

                    <h4 className="text-gray-500 font-medium mt-4 text-center">
                      4. Themes of hypocrisy and societal values
                    </h4>
                  </div>

                  <h3 className="text-gray-600 font-medium mt-4 text-center">
                    3. Reflection on morality and appearance
                  </h3>
                </div>

                <h2 className="text-gray-700 font-semibold mt-4 text-center">
                  2. Panfilo&apos;s choice to open with a moral paradox
                </h2>
              </div>

              <h1 className="text-blue-500 text-lg font-bold mt-4 text-center">
                1. Author&apos;s commentary on storytelling and truth
              </h1>
            </div>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Each story helps us better understand the storytellers&apos;
            character, their relationship with that day&apos;s ruler
            (represented by how well each story follows that days theme), the
            Author&apos;s intended meaning in creating conflict or misalignment
            between layers, and Boccaccio&apos;s intentions in having the Author
            speak in the context that he has established in the introduction.
          </p>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            UCI&apos;s Worldbuilding
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            UCI is a world so massive that one can simply not hope to fully
            explore it. There are countless subgroups, cultures, social events,
            and academic opportunities, that one&apos;s experience is shaped by
            their decisions. In fact, every person is building their own world
            just by attending UCI.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Being at UCI feels like being a member of the{" "}
            <span className="italic inline">brigata</span>, in the best way
            possible! UCI is a shared experience for every student, just as the
            black death was a shared trauma for the world. At UCI, students can
            choose their own path. There are those who revel in social
            networking aspect, those who love the Greek life, the engineers who
            just make junk, and everything between. This akin to the countless
            reactions that people had to the bubonic plague in The Decameron,
            including indulgence, religious devotion, and escapism.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Just as the <span className="italic inline">brigata</span>{" "}
            constructed their world off of their stories, us anteaters construct
            it off of our actions. The connections that we make, the conflicts
            that we have, and the works that we create are a reflection of our
            character. Each of our characters and worlds combine into the larger
            UCI world, which is something so massive and nuanced that no one
            student, professor, or administrator can experience it all. Instead,
            the best we can do is continue building our own world, exploring our
            character, and learning from the worlds of others through
            conversation.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The choices that students make (and also those that are made for
            them) also define the UCI they experience, which is the world that
            their character lives in. In the most simple example, I was
            fortunate enough to get to dorm in Middle Earth Towers!! Many of my
            friends are from the slums (middle earth classics), and even within
            classics friends there are a massive range of experiences. In my
            world, my character presented forethought in finding 3 roommates to
            request to room in towers, the UCI that I live in has fenominal
            housing and living conditions (thus far).
          </p>
          <div className="relative flex justify-center items-center [&:not(:first-child)]:mt-6">
            <div className="w-1/2 text-center leading-7">
              <Image
                src={isengaurd}
                alt="Image 1"
                className="rounded-lg shadow-lg w-full h-full object-cover"
                width={500}
                height={500}
              />
              I often hang out with amazing community that is the Isengard dorm!
              It feels welcoming and lived-in.
            </div>

            <div className="w-1/2 text-center leading-7">
              <Image
                src={towers}
                alt="Image 2"
                className="rounded-lg shadow-lg w-full h-full object-cover"
                width={500}
                height={500}
              />
              My beloved Middle Earth Towers: The perfect common spaces to study
              in and bed to crash in.
            </div>

            <div className="absolute flex justify-center items-center w-full h-full">
              <Image
                src={vs}
                alt="VS Logo"
                className="w-32 h-32 object-contain"
                width={128}
                height={128}
              />
            </div>
          </div>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            How good is UCI housing?? WELL IT DEPENDS... on the world in which
            you are observing it from. It&apos;s what people are experiencing it
            and how they are experiencing it. The choices, personal history, and
            often just chance all define our unique UCI.
          </p>

          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            My World at UCI
          </h2>
          <h3
            className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight"
            ref={calmindonRef}
          >
            Calmindon
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            I&apos;m currently working out of the{" "}
            <Popover>
              <PopoverTrigger asChild>
                <span className="underline cursor-pointer">
                  Calmindon study hall
                </span>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-4">
                <Image
                  src={calmindon}
                  alt="calmindon"
                  className="object-cover rounded-md mx-auto"
                />
              </PopoverContent>
            </Popover>
            , which has been a massively liminal space in my UCI. Everything
            about the location is just perfect for studies,{" "}
            <Popover>
              <PopoverTrigger asChild>
                <span className="underline cursor-pointer">
                  it is slightly secluded within a plaza
                </span>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-4">
                <Image
                  src={calmindon_outside}
                  alt="Calmindon"
                  className="object-cover rounded-md mx-auto"
                />
                <p className="text-sm text-center mt-2">
                  A photo of the outside of Calmindon, looking from the
                  Rivendell side.
                </p>
              </PopoverContent>
            </Popover>
            , so it is relatively low traffic, and it&apos;s architecture leaves
            it slightly warm and fuzzy stuffy feeling (which is a relieving
            break from the literal and metaphorical cold modernism of towers).
            Even its inconveniences, like{" "}
            <Popover>
              <PopoverTrigger asChild>
                <span className="underline cursor-pointer">
                  the light switch that turns off after 55 minutes
                </span>
              </PopoverTrigger>
              <PopoverContent className="w-96 p-4">
                <Image
                  src={calmindon_lightswitch}
                  alt="calmindon lightswitch"
                  className="object-cover rounded-md mx-auto"
                />
              </PopoverContent>
            </Popover>
            , just forces one of us to get up, helps us keep track of time, and
            is the perfect time for an interjection or random comment after a
            long hour of fully locking in.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Calmindon itself, and all the students there, have massively shaped
            my work ethic, and <span className="line-through">ruined</span>{" "}
            shifted my sleep schedule, and changed my activities and classes to
            match theirs for at least this year (and hopefully years to come).
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            But I like to think that I contribute back to Calmindon to at least
            a similar degree as it has shaped me and my experience. Why is
            Calmindon&apos;s study room my study spot and Isengaurd&apos;s study
            room my social hall? Because groups of friends have gotten together
            and sectioned off their responsibilities, into different physical
            spaces, therefore forming those physical spaces to have metaphysical
            significance.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            In our case, my Calmindon friends and I have decided to designate
            Calmindon as our study space in each of our worlds of UCI. As a
            result of this agreement, we make Calmindon a study space for the
            full world of UCI this year; a space where anyone can come and be
            surrounded people that support their, answer their questions, and
            study with them.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Clubs
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Despite being a CS major, the engineering clubs here have been most
            of my time, life, and experience here at UCI. I just went into the
            orientation recruiting week, and said yes to everything that looked
            interesting (which was far more that I could have ever expected, and
            they almost all happened to be engineering).
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            The clubs that I thought would pour my heart and soul into, like
            Quantum Computing (one my personal favorite subjects in high
            school), never felt like the right group for me. Our worlds were
            just too far apart (their Quantum Computing was not the same as
            mine, and I couldn&apos;t go from an intuitive fundamental
            understanding to the &quot;shut up and calculate&quot; approach
            without an uneasy feeling the whole way through).
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Other started off rocky, but slowly grew into one of my passions.
            Some gems just have been straight fun for 8 weeks, and have been the
            core of my world and shaped everything from my schedule as I devote
            countless hours to them, to becoming the core of my social life.
          </p>
          <div className="flex justify-center [&:not(:first-child)]:mt-6">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem key={1}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="leading-7 flex flex-col aspect-square items-center justify-center">
                        <Image
                          src={ACE}
                          alt="ACE"
                          width={1000}
                          height={1000}
                          className="rounded-lg mt-6"
                        />
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                          This is the part storage room for ACE (Anteater Combat
                          Robotics)! I promise it&apos;s more exciting that this
                          mess would imply. If you have ever seen battlebots,
                          it&apos;s just that, but smaller. I&apos;m currently
                          working on a 1lb &quot;antweight&quot; league robot
                          with a team of 3 other friends, and we will compete
                          with a bunch of other schools (including some other
                          teams at UCI). Here is{" "}
                          <Popover>
                            <PopoverTrigger asChild>
                              <span className="underline cursor-pointer">
                                our model
                              </span>
                            </PopoverTrigger>
                            <PopoverContent className="w-96 p-4">
                              <Image
                                src={ACE_model}
                                alt="ACE model"
                                className="object-cover rounded-md mx-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          , as well as{" "}
                          <Popover>
                            <PopoverTrigger asChild>
                              <span className="underline cursor-pointer">
                                the chassis printed out
                              </span>
                            </PopoverTrigger>
                            <PopoverContent className="w-96 p-4">
                              <Image
                                src={ACE_chassis}
                                alt="ACE chassis"
                                className="object-cover rounded-md mx-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          . Although I don&apos;t spend much time here, it the
                          grounding that makes my CAD work worth it. I&apos;ve
                          spent hours designing 1s and 0s to resemble a physical
                          part, in hopes that it will translate to instructions
                          for how robots (3d printers) and I can work to
                          physically manifest my ideas. The magical thing about
                          the ACE storage room and 3d printers is that they
                          represent that bridge between ideas and reality.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={2}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="leading-7 flex flex-col aspect-square items-center justify-center">
                        <Image
                          src={F1tenth}
                          alt="F1tenth"
                          width={1000}
                          height={1000}
                          className="rounded-lg mt-6"
                        />
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                          This is the lab where my F1tenth club meets! We are
                          working on creating a fully autonomous 1/10th scale
                          Formula car, and then we can fly around and race it
                          against other schools! Here is{" "}
                          <Popover>
                            <PopoverTrigger asChild>
                              <span className="underline cursor-pointer">
                                the current state of our car
                              </span>
                            </PopoverTrigger>
                            <PopoverContent className="w-96 p-4">
                              <Image
                                src={F1tenth_car}
                                alt="F1tenth car"
                                className="object-cover rounded-md mx-auto"
                              />
                            </PopoverContent>
                          </Popover>
                          . It is equipped with Lidar, IR, stereo cameras, and
                          an tiny supercomputer for AI calculations (I swear I&apos;m
                          not just using that as a buzzword, the focus of the
                          club is on developing &quot;real&quot; AI applications using
                          reinforcement learning and computer vision, not just
                          more LLM wrapper junk). Ironically, UCI has,
                          *subjectively*, the most advanced applied computer
                          science club meeting in some random room in the social
                          science library, and gave us no space to store our car
                          (it&apos;s in my dorm right now 💀). I think this
                          highlights the bureaucracy of UCI that I&apos;ve had to
                          deal with, and generally feels like a negative in my
                          world, but is certainly keeping the university as an
                          overall well oiled machine.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={3}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="leading-7 flex flex-col aspect-square items-center justify-center">
                        <Image
                          src={swing}
                          alt="Swing"
                          width={1000}
                          height={1000}
                          className="rounded-lg mt-6"
                        />
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                          This is the ICS back patio, next to the engineering
                          tower where I live for academics, and more importantly
                          where swing dance is held! Before orientation week, I
                          would have never seen myself as a swing dancer. But I
                          saw the booth, and was immediately convinced by the
                          energy coming from all the members. It was just
                          maximally constructive, and enjoyable to be around.
                          Here I am, and I couldn&apos;t imagine not being in swing
                          dance! It&apos;s the perfect club to look forward to,
                          getting out and about and also socializing. Swing
                          dancing with a partner feels very physically
                          connective in a way that is extremely enjoyable. Also,
                          the dual purpose of the space for polar opposite
                          purposes, engineering and dance, is a perfect example
                          of the duality of UCI. There are so many cultures and
                          activities combining to form a single space, and it&apos;s
                          just a beautiful thing to be a part of.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={4}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="leading-7 flex flex-col aspect-square items-center justify-center">
                        <Image
                          src={UAV}
                          alt="UAV"
                          width={1000}
                          height={1000}
                          className="rounded-lg mt-6"
                        />
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                          This is my UAV lab, where we&apos;re building racing
                          drones. Ideally, it would be a space of innovation and
                          technology, as drone push the limits (just tiny 100g
                          carbon fiber-filled robotics pulling hundreds of amps
                          is a miracle of engineering). However, due to some
                          leadership issues, the club has been super inactive,
                          and this space (and it&apos;s general inactivity) reminds
                          me of the dependence of members of a club on the
                          leadership to guide them.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
                <CarouselItem key={5}>
                  <div className="p-1">
                    <Card>
                      <CardContent className="leading-7 flex flex-col aspect-square items-center justify-center">
                        <Image
                          src={ZIMS}
                          alt="ZIMS"
                          width={1000}
                          height={1000}
                          className="rounded-lg mt-6"
                        />
                        <p className="leading-7 [&:not(:first-child)]:mt-6">
                          This is the 3D printing lab for ZIMS, where I am
                          building a robotics arm. It&apos;s one of the best
                          communities I&apos;ve been a part of, with everything from
                          3D printers, to CNCs, to laser cutters. To me, the
                          space and all the it contains represents the forefront
                          of community manufacturing. Even though most of the
                          machines are hobby grade, we stand against FabWords
                          (the professional shop at UCI) in creating amazing
                          stuff. This room represents the power of community in
                          my world, and is my home for physically realizing
                          ideas.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Citations
          </h2>
          <ul className="mt-6 list-disc pl-6">
            <li>
              <Link
                href="https://i.pinimg.com/originals/4a/65/ab/4a65abeead3a8d113bccfee5d5d239f4.gif"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Lofi Girl
              </Link>{" "}
              - Pinterest
            </li>
            <li>
              <Link
                href="https://youtu.be/iuT8KImN-Rk?list=RDATfcbG9maQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Lofi Music
              </Link>{" "}
              - kainbeats
            </li>
          </ul>
        </div>
      </div>
      <style jsx>{`
        .rotate-\[-90\] {
          transform: rotateX(-90deg);
        }

        .text-box div:nth-child(1) {
          animation: rollDown 10s forwards infinite;
        }

        .text-box div:nth-child(2) {
          animation: rollDown2 10s forwards infinite;
        }

        .text-box div:nth-child(3) {
          animation: rollDown3 10s forwards infinite;
        }

        @keyframes rollDown {
          0% {
            top: -200px;
            transform: rotateX(-90deg);
          }
          11% {
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          22% {
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          33% {
            top: 0px;
            transform: rotateX(30deg);
            opacity: 0;
          }
        }

        @keyframes rollDown2 {
          33% {
            top: -200px;
            transform: rotateX(-90deg);
          }
          44% {
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          55% {
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          66% {
            top: 0px;
            transform: rotateX(30deg);
            opacity: 0;
          }
        }

        @keyframes rollDown3 {
          66% {
            top: -200px;
            transform: rotateX(-90deg);
          }
          77% {
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          88% {
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          99% {
            top: 0px;
            transform: rotateX(30deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
