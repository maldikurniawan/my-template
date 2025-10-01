import { Card } from "@/components"
import LeafletMap from "@/components/molecules/Maps"

const MapPage = () => {
    return (
        <Card title="Maps">
            <LeafletMap
                center={[-6.2, 106.8]}
                zoom={13}
                markerPosition={[-6.2, 106.8]}
                onMarkerClick={() => alert("Marker clicked!")}
            />
        </Card>
    )
}

export default MapPage