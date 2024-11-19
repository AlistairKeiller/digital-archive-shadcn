"use client";
import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { useSpring, a } from "@react-spring/three";

export default function Decameron() {
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
          >
            Where is Worldbuilding Possible?
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
