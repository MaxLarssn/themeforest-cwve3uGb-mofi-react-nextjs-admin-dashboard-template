import { Href } from "@/Constant";
import { DashBoardCommonDropdown } from "@/Types/DashboardType";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

export const CommonDropdown :React.FC<DashBoardCommonDropdown> = ({days}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown className="icon-dropdown" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret color="transparent" className="border-0 pe-0"><i className="icon-more-alt pe-0" /></DropdownToggle>
      <DropdownMenu end className="dropdown-menu-end">
        <DropdownItem tag="a" href={Href}>{`${days ? "Today" : "Weekly"}`}</DropdownItem>
        <DropdownItem tag="a" href={Href}>{`${days ? "Tomorrow" : "Monthly"}`}</DropdownItem>
        <DropdownItem tag="a" href={Href}>{`${days ? "Yesterday" : "Yearly"}`}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};