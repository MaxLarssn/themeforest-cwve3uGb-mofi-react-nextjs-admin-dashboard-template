import React, { Fragment, useState } from "react";
import { Href } from "@/Constant";
import { Button, Tooltip } from "reactstrap";
import { CommonCustomStateButtonsProp } from "@/Types/ButtonType";

const RaisedCustomStateButtons:React.FC<CommonCustomStateButtonsProp> = ({ data }) => {
  const [buttonTooltip, setButtonTooltip] = useState(false);
  const buttonToggle = () => setButtonTooltip(!buttonTooltip);

  return (
    <Fragment>
      <Button className={`btn-pill btn-air-${data.color}`} as={data.as} tag={data.tag} href={Href} color={data.color} value={data.value} id={`Tooltip-${data.id}`} type={data.type}>
        {data.text}
      </Button>
      <Tooltip target={`Tooltip-${data.id}`} isOpen={buttonTooltip} toggle={buttonToggle}>
        {data.toolText}
      </Tooltip>
    </Fragment>
  );
};

export default RaisedCustomStateButtons;