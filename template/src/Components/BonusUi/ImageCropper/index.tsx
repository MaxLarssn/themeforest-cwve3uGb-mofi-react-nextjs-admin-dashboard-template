import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImageCropper } from "@/Constant";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ImageCropperBody from "./ImageCropperBody";

export default function ImageCropperContainer() {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={ImageCropper} />
            <CardBody>
              <ImageCropperBody />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
