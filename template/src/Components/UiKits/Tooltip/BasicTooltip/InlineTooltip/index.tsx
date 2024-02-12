import { ButtonSmall, Href, InlineTooltipContent, TooltipSmall } from "@/Constant";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Tooltip } from "reactstrap";

export const InlineTooltip = () => {
  const [basictooltip, setbasictooltip] = useState(false);
  const toggle = () => setbasictooltip(!basictooltip);

  return (
    <div>
      <h5 className="mb-1 py-4 pb-0">{InlineTooltipContent}</h5>
      <p>
        Here, is some content about tooltips that you can set the
        <Link id="Tooltip-2" className="txt-primary fw-bold ms-1 me-1" href={Href}>{TooltipSmall}</Link>
        inside the content with help of tooltip and also you can add
        <Button id="Tooltip-2" color="success" className="text-white border-0 px-3 py-1 me-1 ms-1 mb-0">{ButtonSmall}</Button>
        Tooltips helps you to add more and more content. A tooltip is often used to specify extra information about something when the user moves the mouse pointer over an element
      </p>
      <Tooltip target="Tooltip-2" placement="top" isOpen={basictooltip} toggle={toggle}>tooltip</Tooltip>
      <Tooltip target="Tooltip-2" placement="top" isOpen={basictooltip} toggle={toggle}>button</Tooltip>
    </div>
  );
};
