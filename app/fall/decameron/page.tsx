"use client";

import React from "react";
import isengaurd from "@/images/IMG_0025.jpeg";
import towers from "@/images/IMG_0031.jpeg";
import calmindon from "@/images/IMG_0024.jpeg";
import vs from "@/images/Street_Fighter_VS_logo.png";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import Image from "next/image";

export default function Decameron() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)]">
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
          The Decameron&apos;s world builds itself in every story, between every
          storytellers, and through the author. The deeply nested series of
          fictional storytellers each with their own motives, relationships, and
          personalities, give each word a myriad of implications in a deeply
          entangled web of connected worlds.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The bidirectional communciation between layers of worlds was the most
          impactful insight that Dr. Shemek&apos;s lectures had on me. It&apos;s
          not that a story informs us about the characters and what the
          characters represent, or that the character&apos;s personalities can
          give us insight to the story. Instead, Boccaccio uses the stories, the
          character he decides should tell each story, the author, the
          author&apos;s comments, and every other word in the book to his
          arguments and justify his claims.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This sounds suprisingly mundane when typed out, but I promise that, in
          my head, the number of connections I am making and relatships I am
          considering is far to overwhelming and profound to transcribe in a
          five minute read.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Just in one example, consider the very first story told on Day One
          (and then imagine the page covered with arrows like a crime board
          connecting the ideas in each of these):
        </p>
        <div className="flex flex-col items-center justify-center bg-gray-100 [&:not(:first-child)]:mt-6">
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
          character, their relationship with that day&apos;s ruler (represented
          by how well each story follows that days theme), the Author&apos;s
          intended meaning in creating conflict or misalignment between layers,
          and Buccacio&apos;s intentions in having the Author speak in the
          context that he has established in the introduction.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          UCI&apos;s Worldbuilding
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          UCI is a world so massive that one can simply not hope to fully
          explore it. There are countless subgroups, cultures, social events,
          and academic oppurtinities, that one&apos;s experence is shaped by
          their desicions. In fact, every person is building their own world
          just by attending UCI.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Being at UCI feels like being a member of the{" "}
          <span className="italic inline">brigata</span>, in the best way
          possible! UCI is a shared experence for every student, just as the
          black death was a shared trauma for the world. At UCI, students can
          choose their own path. There are those who revel in social networking
          aspect, those who love the Greek life, the engineers who just make
          junk, and everything inbetween. This akin to the countless reactions
          that people had to the bubonic plague in The Decameron, inclduing
          indulgence, relegious devotion, and escapism.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Just as the <span className="italic inline">brigata</span> constructed
          their world off of their stories, us anteaters construct it off of our
          actions. The connections that we make, the conflicts that we have, and
          the works that we create are a reflection of our character. Each of
          our characters and worlds combine into the larger UCI world, which is
          something so massive and nuanced that no one student, professor, or
          administrator can experence it all. Instead, the best we can do is
          continue building our own world, exploring our character, and learning
          from the worlds of others through converstaion.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The choices that students make (and also those that are made for them
          💀) also define the UCI they experence, which is the world that their
          character lives in. In the most simple example, I was fortunate enough
          to get to dorm in Middle Earth Towers!! Many of my friends are from
          the slums (middle earth classics), and even within classics friends
          there are a massive range of experences. In my world, my character
          presented forthought in finding 3 roomates to request to room in
          towers, the UCI that I live in has fenominal housing and living
          conditions (thus far).
        </p>
        <div className="relative flex justify-center items-center [&:not(:first-child)]:mt-6">
          <div className="w-1/2 text-center leading-7">
            <Image
              src={isengaurd}
              alt="Image 1"
              className="rounded-lg shadow-lg w-full h-full object-cover"
              layout="responsive"
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
              layout="responsive"
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
              layout="fixed"
              width={128}
              height={128}
            />
          </div>
        </div>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          How good is UCI housing?? WELL IT DEPENDS... on the world in which you
          are observing it from. It&apos;s what people are experencing it and
          how they are experencing it. The choices, personal history, and often
          just chance all define our unique UCI.
        </p>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          My World at UCI
        </h2>
        <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
          Calmindon
        </h3>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          I&apos;m currently working out of the Calmindon study hall, which has
          been as massively liminal space in my UCI. Everything about the
          location is just perfect for studies,{" "}
          <Popover>
            <PopoverTrigger asChild>
              <span className="underline cursor-pointer">
                it is slightly secluded within a plaza
              </span>
            </PopoverTrigger>
            <PopoverContent className="w-96 p-4">
              <Image
                src={calmindon}
                alt="Calmindon"
                className="object-cover rounded-md mx-auto"
              />
              <p className="text-sm text-center mt-2">
                A photo of the outside of Calmindon, looking from the Rivendell
                side.
              </p>
            </PopoverContent>
          </Popover>
          , so it is relativly low traffic, and it's archecture leaves it
          slightly warm and fuzzy stuffy feeling (which is a relieving break
          from the literal and metiphorical cold modernism of towers). Even it's
          inconviencnces, like the light switch that turns off after 55 minutes,
          just forces one of us to get up, helps us keep track of time, and is
          the perfect time for an interjecftion or random comment after a long
          hour of fully locking in.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Calmindon itself, and all the students there, have massivly shaped my
          work ethic, and <span className="line-through">ruined</span> shifted
          my sleep schedule, and changed my acvitivies and classes to match
          theirs for at least this year (and hopefully years to come).
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          But I like to think that I contribute back to Calmindon to at least a
          similar degree as it has shaped me and my experence. Why is
          Calmindon's study room my study spot and Isengaurd's study room my
          social hall? Becuase groups of friends have gotten together and
          sectioned off their responabiltiies, into different physical spaces,
          therefore forming those physical spaces to have metaphysical
          implications.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          In our case, my Calmindon friends and I have decided to designate
          Calmindon as our study space in each of our worlds of UCI. As a result
          of this agreement, we make Calmindon a study space for the full world
          of UCI this year; a space where anyone can come and be surrounded
          people that support their, answer their questions, and study with
          them.
        </p>
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
