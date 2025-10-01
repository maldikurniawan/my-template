import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap, ZoomControl } from "react-leaflet";

type LeafletMapProps = {
    center: [number, number];
    zoom?: number;
    markerPosition?: [number, number];
    onMarkerClick?: () => void;
    className?: string;
};

const CustomZoomButton = () => {
    const map = useMap();

    return (
        <button
            className="leaflet-control leaflet-bar w-10 h-10 flex justify-center items-center bg-white dark:bg-background-6/90 text-black dark:text-white backdrop-blur-[20px] border rounded-sm hover:bg-neutral-100 cursor-pointer"
            onClick={() => map.setView(map.getCenter(), map.getZoom())}
        >
            <svg
                className="w-5 h-5"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
            >
                <path d="M13 1L13.001 4.06201C16.6192 4.51365 19.4869 7.38163 19.9381 11L23 11V13L19.938 13.001C19.4864 16.6189 16.6189 19.4864 13.001 19.938L13 23H11L11 19.9381C7.38163 19.4869 4.51365 16.6192 4.06201 13.001L1 13V11L4.06189 11C4.51312 7.38129 7.38129 4.51312 11 4.06189L11 1H13ZM12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6ZM12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"></path>
            </svg>
        </button>
    );
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
      <button class="flex items-center w-10 h-10 justify-center rounded-full bg-blue-600 text-white">
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 20C20 20.5524 19.5523 21 19 21H5C4.44772 21 4 20.5524 4 20V11H1L11.3273 1.61162C11.7087 1.26488 12.2913 1.26488 12.6727 1.61162L23 11H20V20ZM11 13V19H13V13H11Z"></path>
        </svg>
      </button>
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
            className={`w-full h-96 mt-2 ${className}`}
        >
            {/* Google Maps tile layer */}
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
            <CustomZoomButton />
        </MapContainer>
    );
}
