import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HeadingDropdowns, Href, Party } from "@/Constant";
import { HeadingDatas } from "@/Data/Uikits/dropdown";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const HeadingDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={HeadingDropdowns} span={HeadingDatas} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="success" className="rounded-pill text-white">{Party}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem header className="fw-bold fs-6" href={Href}>Party List</DropdownItem>
                  <DropdownItem divider/>
                  <DropdownItem href={Href}>Balloons</DropdownItem>
                  <DropdownItem href={Href}>Cake</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeadingDropdown;
