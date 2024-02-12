import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import React, { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";
import { BasicDropdowns, Dashboard, Href } from "@/Constant";
import { DropDownData, DropDownList } from "@/Data/Uikits/dropdown";

const BasicDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BasicDropdowns} span={DropDownData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary">{Dashboard}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem href={Href}>Project</DropdownItem>
                  <DropdownItem href={Href}>Ecommerce</DropdownItem>
                  <DropdownItem href={Href}>Crypto</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {DropDownList.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicDropdown;
