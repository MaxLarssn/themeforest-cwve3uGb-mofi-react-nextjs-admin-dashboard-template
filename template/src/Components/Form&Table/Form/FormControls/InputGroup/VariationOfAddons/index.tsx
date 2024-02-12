import { Card, CardBody, Col, Row } from "reactstrap";
import { VariationOfAddon } from "@/Constant";
import VariationAddonsFormContent from "./VariationAddonsFormContent";
import { VariationOfAddonsCardFooter } from "./VariationOfAddonsCardFooter";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationOfAddonData } from "@/Data/Form&Table/Form";

const VariationOfAddons = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={VariationOfAddon} span={VariationOfAddonData} />
        <CardBody className="card-wrapper input-radius">
          <Row>
            <Col>
              <VariationAddonsFormContent />
            </Col>
          </Row>
        </CardBody>
        <VariationOfAddonsCardFooter />
      </Card>
    </Col>
  );
};

export default VariationOfAddons;
