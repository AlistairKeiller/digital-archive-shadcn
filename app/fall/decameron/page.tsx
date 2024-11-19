"use client";

import React from "react";

export default function Decameron() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)]">
      <div className="mt-6 mx-4 max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">
            <div className="mr-72">
              Nesting{` `}
              <div className="text-box inline-block relative">
                <div className="inline-block absolute rotate-[-90] opacity-0">Worlds</div>
                <div className="inline-block absolute rotate-[-90] opacity-0">Worlds</div>
                <div className="inline-block absolute rotate-[-90] opacity-0">Worlds</div>
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
      <style jsx>{`
        .rotate-\[-90\] {
          transform: rotateX(-90deg);
        }

        .text-box div:nth-child(1){
          animation: rollDown 10s forwards infinite;
        }

        .text-box div:nth-child(2){
          animation: rollDown2 10s forwards infinite;
        }

        .text-box div:nth-child(3){
          animation: rollDown3 10s forwards infinite;
        }

        @keyframes rollDown {
          0%{
            top: -200px;
            transform: rotateX(-90deg);
          }
          11%{
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          22%{
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          33%{
            top: 0px;
            transform: rotateX(30deg);
            opacity: 0;
          }
        }

        @keyframes rollDown2 {
          33%{
            top: -200px;
            transform: rotateX(-90deg);
          }
          44%{
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          55%{
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          66%{
            top: 0px;
            transform: rotateX(30deg);
            opacity: 0;
          }
        }

        @keyframes rollDown3 {
          66%{
            top: -200px;
            transform: rotateX(-90deg);
          }
          77%{
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          88%{
            top: -39px;
            transform: rotateX(0deg);
            opacity: 1;
          }
          99%{
            top: 0px;
            transform: rotateX(30deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
  