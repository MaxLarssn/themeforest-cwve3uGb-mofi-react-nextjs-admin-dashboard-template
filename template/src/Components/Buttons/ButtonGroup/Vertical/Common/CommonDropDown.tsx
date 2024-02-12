import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import { DropdownLink, DropdownTitle, Href } from "@/Constant";
import { CommonDropDownType } from "@/Types/ButtonType";

const CommonDropDown:React.FC<CommonDropDownType> = ({color,dark}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen(!dropdownOpen);

  return (
    <Dropdown className="btn-group" isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color={color} caret className={dark ?"text-dark": "text-white"}>{DropdownTitle}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
        <DropdownItem href={Href}>{DropdownLink}</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default CommonDropDown;
