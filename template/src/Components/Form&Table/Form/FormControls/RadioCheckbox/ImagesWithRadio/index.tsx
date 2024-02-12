import { Card, CardBody, Col, Row } from "reactstrap";
import { ImagesWitRadio } from "@/Constant";
import CustomImagesWithRadio from "./CustomImagesWithRadio";
import DynamicImagesWithRadio from "./DynamicImagesWithRadio";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImageWithRadioData } from "@/Data/Form&Table/Form";

const ImagesWithRadio = () => {
    return (
        <Col sm="12">
          <Card>
            <CommonCardHeader title={ImagesWitRadio} span={ImageWithRadioData} />
            <CardBody>
              <div className="main-img-checkbox">
                <Row className="g-3">
                  <CustomImagesWithRadio />
                  <DynamicImagesWithRadio />
                </Row>
              </div>
            </CardBody>
          </Card>
        </Col>
      );
}

export default ImagesWithRadio