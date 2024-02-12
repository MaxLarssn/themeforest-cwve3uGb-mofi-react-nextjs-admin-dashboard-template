import { Card, CardBody, Col } from "reactstrap";
import { MapContainer, TileLayer } from "react-leaflet";
import { LeafletUSAMap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { UsaMapData } from "@/Data/Miscellaneous/Maps";

const USAMap = () => {
  const positionUSA = { lat: 51.505, lng: -0.09 };

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={LeafletUSAMap} span={UsaMapData} />
        <CardBody>
          <MapContainer className="jvector-map-height z-0" style={{ height: 389 }} zoom={13} center={positionUSA} attributionControl={true} zoomControl={true} doubleClickZoom={true} scrollWheelZoom={true} dragging={true} easeLinearity={0.35}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          </MapContainer>
        </CardBody>
      </Card>
    </Col>
  );
};
export default USAMap;
