import { Card } from "@/components"
import LeafletMap from "@/components/molecules/Maps"
import { ThemeContext } from "@/context/ThemeContext";
import { useContext } from "react";

const MapPage = () => {
    const { colortheme } = useContext(ThemeContext);
    return (
        <Card title="Maps">
            <div className="text-sm mb-3">
                <span style={{ color: colortheme }}>Leaflet</span> is a powerful open-source JavaScript library for interactive maps.
                It supports markers, popups, custom layers, and more.
            </div>
            <LeafletMap
                center={[-5.364222432836597, 105.24317306778593]}
                zoom={16}
                markerPosition={[-5.364222432836597, 105.24317306778593]}
                onMarkerClick={() => alert("Marker Clicked!")}
            />
        </Card>
    )
}

export default MapPage