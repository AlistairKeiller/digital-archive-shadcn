import Image from "next/image";
import React from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StaticImageData } from "next/image";
import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
} from "@/components/ui/hover-card";

interface TimelineItem {
  image: StaticImageData; // Image data
  title: string; // Title or alt text for the image
  description: string; // Description to show on hover
}

interface TimelineProps {
  items: TimelineItem[];
  imageSize: number; // Size of images in pixels
  gap: number; // Gap between images in pixels
}

const Timeline: React.FC<TimelineProps> = ({ items, imageSize, gap }) => {
  return (
    <div className="relative flex flex-col items-center w-min">
      {items.map((item, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* HoverCard wrapping Avatar */}
          <HoverCard>
            <HoverCardTrigger>
              <Avatar
                className="rounded-full overflow-hidden border-2 border-white"
                style={{ width: imageSize, height: imageSize }}
              >
                <AvatarImage src={item.image.src} alt={item.title} />
                <AvatarFallback>?</AvatarFallback>
              </Avatar>
            </HoverCardTrigger>
            <HoverCardContent className="w-96"> {/* Added width class */}
              <div className="flex flex-col items-center">
                {/* Full-size image */}
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-auto"
                />
                {/* Description */}
                <p className="mt-2">{item.description}</p>
              </div>
            </HoverCardContent>
          </HoverCard>

          {/* Line below the image, except for the last image */}
          {index !== items.length - 1 && (
            <div style={{ height: gap }} className="w-px bg-gray-300"></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
