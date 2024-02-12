//@ts-nocheck
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ThumbUpDownRate } from "@/Constant";
import { ThumbUpDownData } from "@/Data/BonusUi/Rating";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col } from "reactstrap";

const ThumbUpDown = () => {
  const [thumbs, setThumbs] = useState(4);

  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ThumbUpDownRate} span={ThumbUpDownData} />
        <CardBody>
          <div className="rating">
            <Rating initialRating={thumbs} emptySymbol="text-primary fa fa-thumbs-down fa-2x" fullSymbol="text-primary fa fa-thumbs-up fa-2x" onClick={(rate) => setThumbs(rate)} />
            <span className="text-primary ms-2 mt-1 current-rating">{thumbs}</span>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThumbUpDown;
