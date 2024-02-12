import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StylerBorders } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";
import { BorderRadius } from "./BorderRadius";
import { BorderColors } from "./BorderColor";
import { BorderWidths } from "./BorderWidth";
import { TextColor } from "./TextColors";
import { StyleData } from "@/Data/Uikits/helperclass";

const StyleBorderCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={StylerBorders} span={StyleData} headClass="card-no-border pb-0"/>
        <CardBody>
          <Row className="g-3">
            <BorderRadius />
            <BorderColors />
            <BorderWidths />
            <TextColor />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StyleBorderCart;
