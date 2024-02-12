import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import { DropMenuData } from "@/Data/Application/LetterBox";

const RightDropDown = () => {
  const [show, setShow] = useState(false);
  const toggle = () => setShow((prevState) => !prevState);

  return (
    <Dropdown isOpen={show} toggle={toggle}>
      <DropdownToggle color="transparent" className="border-0 px-0 light-square">
        <i className="fa fa-ellipsis-v" />
      </DropdownToggle>
      <DropdownMenu end className="dropdown-block">
        {DropMenuData.map((data, i) => (
          <li key={i}>
            <DropdownItem>{data}</DropdownItem>
          </li>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default RightDropDown;
