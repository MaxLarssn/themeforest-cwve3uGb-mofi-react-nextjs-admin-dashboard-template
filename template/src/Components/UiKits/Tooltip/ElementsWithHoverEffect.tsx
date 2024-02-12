import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HTMLElementsWithHoverEffect, NotificationsReceived } from "@/Constant";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";
import { HoverTooltipData, HoverTooltipList } from "@/Data/Uikits/tooltip";

const ElementsWithHoverEffect = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);
  
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={HTMLElementsWithHoverEffect} span={HoverTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Button id="Tooltip-12" className="bg-primary mb-0 me-0">{NotificationsReceived}</Button>
            <Tooltip isOpen={tooltip} toggle={toggle} placement="top" target="Tooltip-12"><i>Thank </i> <u>you</u></Tooltip>
            {HoverTooltipList.map((data) => (
              <CommonTooltip key={data.id} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ElementsWithHoverEffect;
