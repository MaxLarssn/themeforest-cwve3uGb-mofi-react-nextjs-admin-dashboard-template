import { CardHeader, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href, ShiftsOverviews } from "@/Constant";
import { CommonDropdown } from "../../common/CommonDropdown";
import { useState } from "react";

export const ShiftsOverviewHeader = () => {
  const [dropdownOpens, setDropdownOpens] = useState(false);
  const toggleMenu = () => setDropdownOpens((prevState) => !prevState);

  return (
    <CardHeader className="card-no-border pb-0">
      <div className="header-top">
        <h4>{ShiftsOverviews}</h4>
        <div className="d-flex align-items-center gap-3">
          <Dropdown className="location-menu" isOpen={dropdownOpens} toggle={toggleMenu}>
            <DropdownToggle caret color="transparent" className="rounded-3 border-0 px-3" id="userdropdown9">Location</DropdownToggle>
            <DropdownMenu end>
              <DropdownItem tag="a" href={Href}>Address Selection</DropdownItem>
              <DropdownItem tag="a" href={Href}>Geo-Menu</DropdownItem>
              <DropdownItem tag="a" href={Href}>Place Picker</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <CommonDropdown />
        </div>
      </div>
    </CardHeader>
  );
};
