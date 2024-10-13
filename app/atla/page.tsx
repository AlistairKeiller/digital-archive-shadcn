"use client";
import dynamic from 'next/dynamic';
import 'leaflet/dist/leaflet.css';

// Dynamically import the Map components with SSR disabled
const MapContainer = dynamic(() => import('react-leaflet').then(mod => mod.MapContainer), { ssr: false });
const ImageOverlay = dynamic(() => import('react-leaflet').then(mod => mod.ImageOverlay), { ssr: false });
import { LatLngBoundsLiteral } from 'leaflet';
import atlaImage from '@/images/atla.jpg';

const bounds: LatLngBoundsLiteral = [
    [0, 0],
    [36, 54]
];

export default function Map() {
    return (
        <MapContainer center={[18, 27]} zoom={5.4} className="w-screen h-[calc(100vh-69px)]" attributionControl={false}>
            <ImageOverlay
                url={atlaImage.src}
                bounds={bounds}
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
        </MapContainer>
    );
}
