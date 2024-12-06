"use client";
import { useState, useRef, useEffect } from "react";

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
            className="w-full h-[calc(100vh-69px)] object-cover"
          />
        </div>
      )}
      {animationStep < 3 && (
        <div className="absolute inset-0 z-20 h-[calc(100vh-69px)] w-screen flex items-center justify-center">
          <button
            onClick={handleButtonClick}
            className={`p-5 rounded-full text-9xl transition-colors duration-500 ${
              animationStep >= 1 ? "bg-transparent" : "bg-red-600 hover:bg-red-500 shadow-xl hover:shadow-2xl"
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
      <div className="mx-4 max-w-3xl relative">
        <h1 className="text-4xl font-bold text-center">Under Construction</h1>
      </div>
    </div>
  );
}
