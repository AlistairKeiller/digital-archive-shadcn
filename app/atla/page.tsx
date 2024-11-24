"use client";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

// Dynamically import the Map components with SSR disabled
const MapContainer = dynamic(
  () => import("react-leaflet").then((mod) => mod.MapContainer),
  { ssr: false }
);
const ImageOverlay = dynamic(
  () => import("react-leaflet").then((mod) => mod.ImageOverlay),
  { ssr: false }
);
import { LatLngBoundsLiteral } from "leaflet";
import atlaImage from "@/images/atla.webp";

const bounds: LatLngBoundsLiteral = [
  [0, 0],
  [40, 60],
];

export default function Map() {
  return (
    <MapContainer
      center={[20, 30]}
      zoom={5.4}
      className="w-screen h-[calc(100vh-69px)]"
      attributionControl={true}
    >
      <ImageOverlay
        url={atlaImage.src}
        bounds={bounds}
        attribution='<a href="https://www.reddit.com/user/mudron/">u/mudron</a>'
      />
    </MapContainer>
  );
}
