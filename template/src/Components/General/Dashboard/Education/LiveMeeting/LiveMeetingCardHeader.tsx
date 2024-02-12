import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { Href, LiveMeetings } from "@/Constant";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { useState } from "react";

export const LiveMeetingCardHeader = () => {
  const [dropdownOpens, setDropdownOpens] = useState(false);
  const toggleMenu = () => setDropdownOpens((prevState) => !prevState);

  return (
    <DashboardCommonHeader title={LiveMeetings} dropDownFalse>
      <div className="d-flex align-items-center gap-3">
        <Dropdown className="location-menu" isOpen={dropdownOpens} toggle={toggleMenu}>
          <DropdownToggle caret color="transparent" className="rounded-3 border-0 px-3" id="locationdropdown">
            1pm-2pm
          </DropdownToggle>
          <DropdownMenu end>
            <DropdownItem tag="a" href={Href}>
              Address Selection
            </DropdownItem>
            <DropdownItem tag="a" href={Href}>
              Geo-Menu
            </DropdownItem>
            <DropdownItem tag="a" href={Href}>
              Place Picker
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </DashboardCommonHeader>
  );
};
