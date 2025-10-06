import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, ZoomControl } from "react-leaflet";

type LeafletMapProps = {
    center: [number, number];
    zoom?: number;
    markerPosition?: [number, number];
    onMarkerClick?: () => void;
    className?: string;
};


export default function LeafletMap({
    center,
    zoom = 13,
    markerPosition,
    onMarkerClick,
    className,
}: LeafletMapProps) {
    const customIcon = L.divIcon({
        className: "leafletCustomIcon",
        html: `
        <div class="relative group inline-block">
            <button
                class="flex items-center w-10 h-10 justify-center rounded-full bg-primary text-white cursor-pointer"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                class="w-5 h-5"
                >
                <path
                    d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM12 11.5c-1.38 
                    0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 
                    2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                />
                </svg>
            </button>
            <div
                class="absolute left-1/2 -translate-x-1/2 mt-2 hidden group-hover:flex flex-col items-start gap-1 w-56 p-3 rounded-md bg-white dark:bg-black border border-[#E0E6ED] dark:border-[#253B5C] text-white shadow z-50"
            >
                <div class="flex items-center gap-2">
                    <svg class="w-10 h-10 bg-primary p-2 rounded-md aspect-square" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20 20C20 20.5524 19.5523 21 19 21H5C4.44772 21 4 20.5524 4 20V11H1L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11H20V20ZM11 13V19H13V13H11Z"></path>
                    </svg>
                    <div>
                        <span class="font-semibold text-black dark:text-white-dark">Universitas Lampung</span>
                        <p class="text-xs text-gray-600 dark:text-gray-500">Jl. Prof. Dr. Sumantri</p>
                    </div>
                </div>
            </div>
        </div>
    `,
        iconSize: [45, 45],
        iconAnchor: [22, 22],
    });

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom
            zoomControl={false}
            className={`w-full h-96 ${className}`}
        >
            <TileLayer
                url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}"
                subdomains={["mt0", "mt1", "mt2", "mt3"]}
            />

            {markerPosition && (
                <Marker
                    position={markerPosition}
                    icon={customIcon}
                    eventHandlers={{
                        click: () => onMarkerClick?.(),
                    }}
                />
            )}

            <ZoomControl position="topleft" />
        </MapContainer>
    );
}
