import dynamic from "next/dynamic";
import { useMemo } from "react";

export function Atla() {
    const Map = useMemo(() => dynamic(
        () => import('@/components/map'),
        {
            loading: () => <p>A map is loading</p>,
            ssr: false
        }
    ), [])
    return (
        <div className="w-96 h-96">
            <Map />
        </div>
    );
}