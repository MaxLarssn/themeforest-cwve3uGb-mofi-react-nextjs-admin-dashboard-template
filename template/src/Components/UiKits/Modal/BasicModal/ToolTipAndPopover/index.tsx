import React, { useState } from "react";
import CommonModal from "../../Common/CommonModal";
import { ButtonSmall, Href, PopoverModal, TooltipsAndPopovers, TooltipsModal } from "@/Constant";
import { Button, Tooltip } from "reactstrap";

export const ToolTipAndPopover = () => {
  const [toolAndPopover, setToolAndPopover] = useState(false);
  const tooltipsAndPopoversToggle = () => setToolAndPopover(!toolAndPopover);
  const [tooltipLinkOne, setTooltipLinkOne] = useState(false);
  const toggleLinkOne = () => setTooltipLinkOne(!tooltipLinkOne);

  return (
    <>
      <Button color="info" onClick={tooltipsAndPopoversToggle}>{TooltipsAndPopovers}</Button>
      <CommonModal isOpen={toolAndPopover} toggle={tooltipsAndPopoversToggle} title="Tooltip and Popover Moda">
        <h5>{PopoverModal}</h5>
        <p className="mt-2">{`This `}
          <Button color="success" className="popover-test" id="Tooltip-ModalBtnProp" title="this is amazing content">{ButtonSmall}</Button>{` triggers a popover on click.`}
        </p>
        <hr />
        <h5>{TooltipsModal}</h5>
        <p className="mt-2">
          <a className="tooltip-test text-info" href={Href} id="TooltipExample">{` This link `}</a>
          <Tooltip autohide placement="top" target="TooltipExample" isOpen={tooltipLinkOne} toggle={toggleLinkOne}>Tooltip</Tooltip>and
          <a className="tooltip-test text-info" href={Href} id="TooltipExample">{` that link `}</a>
          <Tooltip placement="top" target="TooltipExample" isOpen={tooltipLinkOne} toggle={toggleLinkOne}>Tooltip</Tooltip>have tooltips on hover.
        </p>
      </CommonModal>
    </>
  );
};
