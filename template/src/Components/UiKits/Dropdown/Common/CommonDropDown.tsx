import { Href } from "@/Constant";
import { CommonDropdownProp } from "@/Types/UikitsType";
import { Fragment, useState } from "react";
import { ButtonGroup, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const CommonDropDown:React.FC<CommonDropdownProp> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <ButtonGroup>
      <Dropdown isOpen={open} toggle={toggle} >
        <DropdownToggle caret color={item.btnColor} className={`text-white ${item.toggleClassName}`} size={item.size}>
          {item.btnText}
        </DropdownToggle>
        <DropdownMenu className={item.dropclassName}>
          {item.items.map((dropdownItem, index) => (
            <Fragment key={index}>
              {dropdownItem.item ? <DropdownItem href={Href}>{dropdownItem.item}</DropdownItem> : ""}
              {dropdownItem.divider ? <DropdownItem divider /> : ""}
            </Fragment>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};

export default CommonDropDown;
