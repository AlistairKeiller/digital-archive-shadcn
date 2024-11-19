"use client"
import React, { useState, useRef } from 'react';
import { gsap } from 'gsap';

export default function Decameron() {
  const titles = ['Where is Worldbuilding', 'Decameron', 'UCI'];
  const [currentIndex, setCurrentIndex] = useState(0);
  const titleRef = useRef(null);

  const handleClick = () => {
    const nextIndex = (currentIndex + 1) % titles.length;

    gsap.to(titleRef.current, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => {
        setCurrentIndex(nextIndex);

        gsap.to(titleRef.current, { opacity: 1, duration: 0.5 });
      },
    });
  };

  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)]">
      <div className="mt-6 mx-4 max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          <span ref={titleRef}>{titles[currentIndex]}</span>
          <span
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
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
