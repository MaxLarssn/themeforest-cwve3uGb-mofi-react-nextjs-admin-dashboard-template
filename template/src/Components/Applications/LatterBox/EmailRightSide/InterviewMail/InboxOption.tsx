import SVG from "@/CommonComponent/SVG";
import { MailPropsType } from "@/Types/LatterBoxType";
import { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const InboxOption :React.FC<MailPropsType> = ({handlePrintData}) => {
  const [fill,setFill] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  

  return (
    <div className="inbox-options">
      <span>Friday 07 Apr (4 hours ago)</span>
      <div className="light-square" onClick={() => setFill(!fill)}>
        <SVG className={`important-mail ${fill ? "active" : ""}`} iconId="mail-star" />
      </div>
      <div className="light-square" onClick={handlePrintData}>
        <SVG iconId="print" />
      </div>
      <div className="light-square btn-group">
        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
          <DropdownToggle color="" className="border-0 pt-3"><SVG iconId="menubar" /></DropdownToggle>
          <DropdownMenu className="dropdown-block">
            <DropdownItem><i className="fa fa-mail-reply" />Reply</DropdownItem>
            <DropdownItem><i className="fa fa-mail-forward" />Forward</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </div>
  );
};

export default InboxOption;