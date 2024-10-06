import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { StaticImageData } from 'next/image';

interface TimelineProps {
  images: StaticImageData[];    // Array of image URLs
  imageSize: number;   // Size of images in pixels
  gap: number;         // Gap between images in pixels
}

const Timeline: React.FC<TimelineProps> = ({ images, imageSize, gap }) => {
  return (
    <div className="relative flex flex-col items-center w-min">
      {images.map((image, index) => (
        <div key={index} className="flex flex-col items-center">
          {/* Image */}
          <Avatar
            className="rounded-full overflow-hidden border-2 border-white"
            style={{ width: imageSize, height: imageSize }}
          >
            <AvatarImage src={image.src} alt={`Timeline Image ${index + 1}`} />
            <AvatarFallback>?</AvatarFallback>
          </Avatar>

          {/* Line below the image, except for the last image */}
          {index !== images.length - 1 && (
            <div
              style={{ height: gap }}
              className="w-px bg-gray-300"
            ></div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
