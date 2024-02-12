import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DarkDropdowns, DarkNight, Href } from "@/Constant";
import { DarkData } from "@/Data/Uikits/dropdown";
import React, { useState } from "react";
import { Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const DarkDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={DarkDropdowns} span={DarkData} />
        <CardBody className="dropdown-basic m-0 rtl-dropdown">
          <div className="common-flex dark-dropdown">
            <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle caret color="dark" className="text-white">{DarkNight}</DropdownToggle>
              <DropdownMenu className="dropdown-menu-dark dropdown-block mt-1">
                <DropdownItem active header>Dark moon</DropdownItem>
                <DropdownItem href={Href}>Dark owl</DropdownItem>
                <DropdownItem href={Href}>Nightfall</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DarkDropdown;
