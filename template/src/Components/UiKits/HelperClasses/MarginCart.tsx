import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Margin } from "@/Constant";
import { MarginData, MarginDetail } from "@/Data/Uikits/helperclass";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const MarginCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={Margin} span={MarginData} headClass="card-no-border pb-0" />
        <CardBody>
          <div className="gradient-border">
            <div className="helper-common-box gap-0 mb-0">
              <div className="helper-box m-10 border bg-light"></div>
              <span>.m-10</span>
            </div>
            {MarginDetail.map((item, index) => (
              <div className="helper-common-box gap-0 mb-0" key={index}>
                <div className={`helper-box m-${item} border bg-light`}></div>
                <span>{`.m-${item}`}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MarginCart;
