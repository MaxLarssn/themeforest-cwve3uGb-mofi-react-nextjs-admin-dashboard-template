import SVG from "@/CommonComponent/SVG";
import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const ChatDropMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  return (
    <div className="dropdown-form">
    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="up">
      <DropdownToggle color="transparent" className="dropdown-toggle dropdown-form p-0 border-0 bg-transparent"><i className="icon-plus" /></DropdownToggle>
      <DropdownMenu className="chat-icon">
        <div className="mb-2 dropdown-item"><SVG iconId="camera" /></div>
        <div className="dropdown-item"><SVG iconId="attchment" /></div>
      </DropdownMenu>
    </Dropdown>
    </div>
  );
};

export default ChatDropMenu;