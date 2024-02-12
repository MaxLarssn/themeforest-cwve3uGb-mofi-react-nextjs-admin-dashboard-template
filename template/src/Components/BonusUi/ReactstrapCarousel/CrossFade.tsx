import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CrossFades } from "@/Constant";
import { CrossFadeData, CrossFadeDataList } from "@/Data/BonusUi/OwlCarousel";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import CommonCarousel from "./Common/CommonCarousel";

const CrossFade = () => {
  return (
    <Col xl="6" xs="12">
      <Card>
        <CommonCardHeader title={CrossFades} span={CrossFadeData} />
        <CardBody>
          <CommonCarousel data={CrossFadeDataList} control fade interval="2500"/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CrossFade;
