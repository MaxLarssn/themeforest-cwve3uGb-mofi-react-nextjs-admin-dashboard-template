import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletWorldMap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { UsaPosition, WorldMapData } from "@/Data/Miscellaneous/Maps";

const WorldMap = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LeafletWorldMap} span={WorldMapData} />
        <CardBody>
          <MapContainer style={{ height: 389 }} easeLinearity={0.35} attributionControl={true} center={UsaPosition} zoom={13} scrollWheelZoom={true} className="z-0 jvector-map-height">
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default WorldMap;
