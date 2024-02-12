import React, { Fragment, useState } from "react";
import { Href } from "../../../../Constant";
import { Button, Tooltip } from "reactstrap";
import { CommonCustomStateButtonsProp } from "@/Types/ButtonType";

const EdgeCustomStateButtons:React.FC<CommonCustomStateButtonsProp> = ({ data }) => {
  const [buttonATooltip, setButtAtooltip] = useState(false);
  const buttonAToggle = () => setButtAtooltip(!buttonATooltip);

  return (
    <Fragment>
      <Button className="btn-pill" as={data.as} tag={data.tag} href={Href} color={data.color} value={data.value} id={`Tooltip-${data.id}`} type={data.type}>
        {data.text}
      </Button>
      <Tooltip target={`Tooltip-${data.id}`} isOpen={buttonATooltip} toggle={buttonAToggle}>
        {data.toolText}
      </Tooltip>
    </Fragment>
  );
};

export default EdgeCustomStateButtons;