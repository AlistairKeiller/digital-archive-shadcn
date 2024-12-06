"use client";
import { useState, useRef, useEffect } from "react";
import flamingText from "@/images/flamingtext.gif";
import shapeGod from "@/images/ShapeGod.png";
import Image from "next/image";
import Link from "next/link";

export default function Sower() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [animationStep, setAnimationStep] = useState(0);

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
  }, [animationStep]);

  return (
    <div className="relative flex justify-center min-h-[calc(100vh-69px)]">
      {showVideo && (
        <div className="absolute inset-0 z-10">
          <video
            src="/test2.webm"
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
            className={`p-5 rounded-full text-9xl transition-colors duration-500 ${
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
          className="float-right m-5"
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
          &quot;God is change&quot; is the beating heart of the novel. It
          reflects the state of the destyopian society; the generations before
          did not have enough care for the impact in their world, leaving global
          warming &apos;for later,&apos; and this generation with dehibilitating
          generational debt. This can result from the non-consequentialist
          additute of a Baptist minister, which belives that God starts,
          overlooks, and maintains a balance, and all one needs to do is act
          morally and in his world.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          This removes much of the responsibility from individuals, as it&apos;s
          not up to them to ensure that things like global warming and drug use
          stay under control. The concept of &quot;God is Change&quot; is a
          stark contrast to the nonconsequentialist view of God, as it places
          the responsibility of change on the individual. &quot;God is
          Change&quot; is bidirectional in the sense it is equivalent to
          &quot;Change is God.&quot; So, any change is a reflection of God, and
          it is not somehow inferior to holy change. That means that we, mere
          humans, have the power, and therefore responsibility, to &quot;Shape
          God.&quot;
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          <span className="italic">Parable of the Sower</span> not only creates
          a new world but develops a worldview tailored to that world. The
          worldview and world are both so carefully designed as a dystopian view
          that they accurately portray many people&apos;s thoughts about the
          present and future, as seen by{" "}
          <Link href={"https://godischange.org/about/"} className="underline">
            those who worship Earthseed
          </Link>{" "}
          as a real religion.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 first:mt-0">
          Some Virtual Introspection
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The concept of &quot;God is Change&quot; in a dystopian is the theme
          of this website. To get here, you had to burn down an entire blank
          page, with no way to get it back (or at least, not with a simple
          refresh)! I built this as the best reflection I could of both
          hyperempathy and Earthseed, which is basically Lauren&apos;s life.
          Imagine I put a Dog on the first page! I am not evil enough to build
          such a depiction, and I hope you wouldn't press that button either!
          Was viewing this website worth burning the page? Would it be worth
          burning a virtual dog?
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Everyone has to be the change they want to see (however cliche that
          sounds), even if it&apos;s hard or near impossible to carry out (like
          Lauren killing for what&apos;s right and her own survival, and
          effectively feeling death in the process). You participated in the
          study of destroying one thing to see another, and we all do it all the
          time, every day, even if we don&apos;t see it. I think both Earthseed,
          this website, and <span className="italic">Parable of the Sower</span>{" "}
          are all exploring this same concept in a more explicit sense.
        </p>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight mt-6 first:mt-0">
          Some Virtual Introspection
        </h2>
      </div>
    </div>
  );
}
