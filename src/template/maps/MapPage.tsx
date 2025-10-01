import { Card } from "@/components"
import LeafletMap from "@/components/molecules/Maps"

const MapPage = () => {
    return (
        <Card title="Maps">
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