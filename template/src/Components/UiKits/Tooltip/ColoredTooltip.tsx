import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColoredTooltips, Primary } from "@/Constant";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import CommonTooltip from "./Common/CommonTooltip";
import { ColorTooltipData, ColorTooltipList } from "@/Data/Uikits/tooltip";

const ColoredTooltip = () => {
  const [tooltip, setTooltip] = useState(false);
  const toggle = () => setTooltip(!tooltip);

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={ColoredTooltips} span={ColorTooltipData} />
        <CardBody>
          <div className="common-flex">
            <Button color="primary" className="mb-0 me-0" id="Tooltip-3">{Primary}</Button>
            <Tooltip target="Tooltip-3" placement="top" isOpen={tooltip} toggle={toggle}>{Primary}</Tooltip>
            {ColorTooltipList.map((item, index) => (
              <CommonTooltip key={index} item={item} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredTooltip;
