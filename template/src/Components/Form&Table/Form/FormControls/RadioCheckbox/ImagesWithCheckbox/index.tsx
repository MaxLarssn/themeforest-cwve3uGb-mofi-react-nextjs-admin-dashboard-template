import { Card, CardBody, Col, Row } from "reactstrap";
import { ImagesWithCheckboxs } from "@/Constant";
import { DynamicImagesWithCheckbox } from "./DynamicImagesWithCheckbox";
import { CustomImagesWithCheckbox } from "./CustomImagesWithCheckbox";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImageWithCheckboxData } from "@/Data/Form&Table/Form";

const ImagesWithCheckbox = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={ImagesWithCheckboxs} span={ImageWithCheckboxData} />
        <CardBody>
          <div className="main-img-checkbox">
            <Row className="g-3">
              <CustomImagesWithCheckbox />
              <DynamicImagesWithCheckbox />
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ImagesWithCheckbox;
