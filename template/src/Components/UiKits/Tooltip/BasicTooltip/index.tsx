import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTooltips, MagicPleaseHoverMe } from "@/Constant";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Tooltip } from "reactstrap";
import { InlineTooltip } from "./InlineTooltip";
import { BasicTooltipData } from "@/Data/Uikits/tooltip";

const BasicTooltip = () => {
  const [basictooltip, setbasictooltip] = useState(false);
  const toggle = () => setbasictooltip(!basictooltip);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicTooltips} span={BasicTooltipData} />
        <CardBody>
          <Button color="primary" className="example-popover mb-0 me-0" id="Tooltip-1">{MagicPleaseHoverMe}</Button>
          <Tooltip target="Tooltip-1" placement="top" isOpen={basictooltip} toggle={toggle}>
            Surprise!!! Thank you for hovering...
          </Tooltip>
          <InlineTooltip />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTooltip;
