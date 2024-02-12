import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { VariationOfSwitche } from "@/Constant";
import { VariationOfSwitcheOne } from "./VariationOfSwitcheOne";
import { VariationOfSwitcheTwo } from "./VariationOfSwitcheTwo";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { VariationSwitchData } from "@/Data/Form&Table/Form";

const VariationOfSwitches = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={VariationOfSwitche} span={VariationSwitchData} />
        <CardBody className="common-flex">
          <ul className="tg-list common-flex">
            <VariationOfSwitcheOne />
            <VariationOfSwitcheTwo />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default VariationOfSwitches;
