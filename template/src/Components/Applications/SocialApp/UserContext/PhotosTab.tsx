import { DescriptionMyGallery } from "@/Components/Miscellaneous/Gallery/GalleryDridDesc/DescriptionMyGallery";
import { Card, CardBody, Col, Row } from "reactstrap";

const PhotosTab = () => {
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardBody className="my-gallery gallery-with-description">
            <Row>
              <DescriptionMyGallery />
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PhotosTab;
