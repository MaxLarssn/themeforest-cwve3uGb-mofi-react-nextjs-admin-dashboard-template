import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { PillsContextualVariations } from "@/Constant";
import { Card, Col } from "reactstrap";
import CommonTagAndPillsCardBody from "./Common/CommonTagAndPillsCardBody";
import { PillsContext, PillsData } from "@/Data/Uikits/tag-pills";

const PillsContextualVariationsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={PillsContextualVariations} span={PillsData} />
        <CommonTagAndPillsCardBody data={PillsContext} pill />
      </Card>
    </Col>
  );
};

export default PillsContextualVariationsCart;