"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

export default function Decameron() {
  const titles = ["Where is Worldbuilding Possible", "Decameron", "UCI"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const { opacity } = useSpring({
    opacity: isFading ? 0 : 1,
    config: { duration: 500 },
  });

  const handleClick = () => {
    setIsFading(true); // Start fading out
    setTimeout(() => {
      const nextIndex = (currentIndex + 1) % titles.length;
      setCurrentIndex(nextIndex); // Change the title
      setIsFading(false); // Start fading in
    }, 500); // Match the CSS transition duration
  };

  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)]">
      <div className="mt-6 mx-4 max-w-3xl">
        <Canvas style={{ height: "60px" }}>
          <Text
            position={[0, 0, 0]}
            fontSize={6}
            color="black"
            anchorX="center"
            anchorY="middle"
            onClick={handleClick}
            onPointerOver={() => (document.body.style.cursor = "pointer")}
            onPointerOut={() => (document.body.style.cursor = "auto")}
          >
            {titles[currentIndex]}?
          </Text>
        </Canvas>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The Decameron's worldbuilding
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Decameron builds its world in between the stories, using their
          relationships. The deeply nested series of fictional storytellers each
          with their own motives, relationships, and personalities, give each
          word a myriad of implications in a deeply entangled web of connected
          worlds.
        </p>
      </div>
    </div>
  );
}
