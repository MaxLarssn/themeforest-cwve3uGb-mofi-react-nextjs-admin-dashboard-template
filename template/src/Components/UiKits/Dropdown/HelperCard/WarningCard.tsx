import { Href, Warning, WarningCards } from "@/Constant";
import React, { useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const WarningCard = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle}>
        <DropdownToggle caret color="warning" className="text-white">{WarningCards}</DropdownToggle>
        <DropdownMenu className="dropdown-block p-3 dark-form">
          <li>
            <h6 className="fs-6 fw-bold pb-2">{Warning}</h6>
            <DropdownItem className="dropdown-item p-0 helper-truncate" href={Href}>Please! Check your notifications.</DropdownItem>
          </li>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};
