import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Padding } from "@/Constant";
import { PaddingCartData, PaddingCartDetail } from "@/Data/Uikits/helperclass";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const PaddingCart = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={Padding} span={PaddingCartData} headClass="card-no-border pb-0" />
        <CardBody>
          <div className="border-wrapper h-100 alert-light-light dark-helper">
            <h5 className="f-w-600 mb-3">{Padding}</h5>
            <div className="helper-common-box helper-p-wrapper">
              <div className="helper-p-box p-10 bg-light border">
                <span>.p-10</span>
              </div>
              {PaddingCartDetail.map((item, index) => (
                <div className={`helper-p-box p-${item} bg-light border`} key={index}>
                  <span>{`.p-${item}`}</span>
                </div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaddingCart;
