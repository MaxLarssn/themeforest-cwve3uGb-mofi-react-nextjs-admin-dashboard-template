import { Href } from "@/Constant";
import { SplitButtonDropdownProp } from "@/Types/UikitsType";
import { useState } from "react";
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownToggle } from "reactstrap";

const SplitButtonDropdown:React.FC<SplitButtonDropdownProp> = ({ item }) => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <ButtonGroup>
      <Button outline color={item.btnColor}>{item.btnText}</Button>
      <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
        <DropdownToggle color={item.btnColor}><i className="icofont icofont-arrow-down"></i></DropdownToggle>
        <div className="dropdown-content">
          {item.items.map((itm, index) => (
            <DropdownItem href={Href} key={index}>{itm.item}</DropdownItem>
          ))}
        </div>
      </Dropdown>
    </ButtonGroup>
  );
};

export default SplitButtonDropdown;
