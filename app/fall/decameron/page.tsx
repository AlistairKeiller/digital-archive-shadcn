"use client";
import React, { useState, useRef } from "react";

export default function Decameron() {
  const titles = ["Where is Worldbuilding Possible", "Decameron", "UCI"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const titleRef = useRef(null);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % titles.length;

    setIsFading(true); // Start fading out
    setTimeout(() => {
      setCurrentIndex(nextIndex); // Change the title
      setIsFading(false); // Start fading in
    }, 500); // Match the CSS transition duration
  };

  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)]">
      <div className="mt-6 mx-4 max-w-3xl">
        <h1
          className={`scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center transition-opacity duration-500 ${
            isFading ? "opacity-0" : "opacity-100"
          }`}
          ref={titleRef}
        >
          <span>{titles[currentIndex]}</span>
          <span
            onClick={handleClick}
            style={{ cursor: "pointer" }}
            className="text-blue-500"
          >
            ?
          </span>
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the
          error of his ways and repealed the joke tax.
        </p>
      </div>
    </div>
  );
}
