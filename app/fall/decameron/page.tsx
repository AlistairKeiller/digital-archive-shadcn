"use client";

import React from "react";

export default function Decameron() {
  return (
    <div className="flex justify-center min-h-[calc(100vh-69px)]">
      <div className="mt-6 mx-4 max-w-3xl">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl flex justify-center">
            <div>
              Nesting{` `}
              <div className="text-box inline-block relative">
                <div className="inline-block absolute rotate-[-90] opacity-0">Worlds</div>
                <div className="inline-block absolute rotate-[-90] opacity-0">Worlds</div>
                <div className="inline-block absolute rotate-[-90] opacity-0">Worlds</div>
              </div>
              <div className="inline-block min-w-28 lg:min-w-40"></div>
            </div>
        </h1>
        <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
          The Decameron&apos;s Worldbuilding
        </h2>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The Decameron&apos;s world builds itself in every story, between every storytellers, and through the author.
          The deeply nested series of fictional storytellers
          each with their own motives, relationships, and personalities, give
          each word a myriad of implications in a deeply entangled web of
          connected worlds.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The bidirectional communciation between layers of worlds was the most impactful insight that Dr. Shemek&apos;s lectures had on me. It&apos;s not that a story informs us about the characters and what the characters represent, or that the character&apos;s personalities can give us insight to the story. Instead, Boccaccio uses the stories, the character he decides should tell each story, the author, the author&apos;s comments, and every other word in the book to his arguments and justify his claims.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        This sounds suprisingly mundane when typed out, but I promise that, in my head, the number of connections I am making and relatships I am considering is far to overwhelming and profound to transcribe in a five minute read.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Just in one example, consider the very first story told on Day One (and then imagine the page covered with arrows like a crime board connecting the ideas in each of these):
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
          Each story helps us better understand the storytellers&apos; character, their relationship with that day&apos;s ruler (represented by how well each story follows that days theme), the meaning of conflict the Author is trying to convey, and putting the Author&apos;s conceptions within the narrative context established in the begining.
        </p>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          
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
  