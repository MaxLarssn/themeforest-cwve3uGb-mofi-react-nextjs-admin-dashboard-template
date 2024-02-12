import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BasicRadioAndCheckboxs } from "@/Constant";
import { SimpleCheckboxs } from "./SimpleCheckboxs";
import { SimpleRadio } from "./SimpleRadio";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicRadioCheckboxData } from "@/Data/Form&Table/Form";

const BasicRadioAndCheckbox = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicRadioAndCheckboxs} span={BasicRadioCheckboxData} />
        <CardBody className="mb-4">
          <Row className="g-3">
            <SimpleCheckboxs />
            <SimpleRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicRadioAndCheckbox;
