import { useState } from "react";
import { Fragment } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { ToggleDropdown } from "@/Constant";
import { ButtonDropdownListProp } from "@/Types/FormType";

const ButtonDropdownList:React.FC<ButtonDropdownListProp> = ({ color, title, options, outline, divider }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle color={color} outline={outline} caret split>
        {title}
       <span className="visually-hidden">{ToggleDropdown}</span>
      </DropdownToggle>
      <DropdownMenu className="dropdown-block">
        {options.map((item, i) => (
          <Fragment key={i}>
            <DropdownItem>{item}</DropdownItem>
            {divider && i === 2 && <DropdownItem divider />}
          </Fragment>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ButtonDropdownList