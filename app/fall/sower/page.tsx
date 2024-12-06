"use client";
import construction from "@/images/construction.svg";
import Image from "next/image";
import { useState, useRef } from "react";

export default function Sower() {
  const [showVideo, setShowVideo] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleButtonClick = () => {
    videoRef.current?.play();
  };
  

  return (
    <div className="relative flex justify-center min-h-[calc(100vh-69px)]">
      {showVideo && (
        <div className="absolute inset-0 z-10">
          <video
            src="/test2.webm"
            ref={videoRef}
            muted
            onEnded={() => setShowVideo(false)}
            className="w-full h-[calc(100vh-69px)] object-cover"
          />
        </div>
      )}
      <div className="absolute inset-0 z-20 h-[calc(100vh-69px)] w-screen flex items-center justify-center">
        <button
          className="p-5 bg-red-600 hover:bg-red-500 shadow-xl hover:shadow-2xl rounded-full text-9xl" onClick={handleButtonClick}
        >
          🔥
        </button>
      </div>
      <div className="mx-4 max-w-3xl relative">
        <h1 className="text-4xl font-bold text-center">Under Construction</h1>
      </div>
    </div>
  );
}

