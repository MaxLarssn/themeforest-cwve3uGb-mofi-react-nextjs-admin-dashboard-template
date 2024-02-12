import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OnlyOneSidePadding, PaddingLeft } from "@/Constant";
import { SidePaddingData, SidePaddingDetails, SidePaddings } from "@/Data/Uikits/helperclass";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const SidePadding = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={OnlyOneSidePadding} span={SidePaddingData} headClass="card-no-border pb-0" />
        <CardBody>
          <Row className="g-3">
            <Col xxl="3" sm="6">
              <div className="border-wrapper h-100 alert-light-light dark-helper">
                <h5 className="f-w-600 mb-3">{PaddingLeft}</h5>
                <div className="common-p-box">
                  {SidePaddings.map((value, index) => (<span key={index}>{value}</span>))}
                </div>
              </div>
            </Col>
            {SidePaddingDetails.map((item, index) => (
              <Col xxl="3" sm="6" key={index}>
                <div className="border-wrapper h-100 alert-light-light dark-helper">
                  <h5 className="f-w-600 mb-3">{item.title}</h5>
                  <div className="common-p-box">{item.direction.map((data, index) => (<span key={index}>{data}</span>))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SidePadding;
