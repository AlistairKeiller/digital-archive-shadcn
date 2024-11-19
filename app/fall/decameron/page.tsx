"use client";

import React from "react";

export default function Decameron() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)]">
      <div className="mt-6 mx-4 max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">
          <div className="flex">
            Nesting
            <div className="ml-6 flex justify-center items-center relative h-10 overflow-hidden leading-10 w-72">
              <div className="absolute top-0 w-full text-center">
                <span className="absolute animate-roll font-bold flex flex-col items-center justify-center">
                  Worlds
                  <br />
                  Worlds
                  <br />
                  Worlds
                  <br />
                  Worlds
                </span>
              </div>
            </div>
          </div>
        </h1>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The Decameron's Worldbuilding
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Decameron builds its world in between the stories, using their
          relationships. The deeply nested series of fictional storytellers
          each with their own motives, relationships, and personalities, give
          each word a myriad of implications in a deeply entangled web of
          connected worlds.
        </p>
      </div>
    </div>
  );
}
  