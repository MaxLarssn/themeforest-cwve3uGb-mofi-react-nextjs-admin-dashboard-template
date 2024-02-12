import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { DropdownSizings, Href, LargeButton } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SizingData, SizingList } from "@/Data/Uikits/dropdown";
import CommonDropDown from "./Common/CommonDropDown";

const DropdownSizing = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={DropdownSizings} span={SizingData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="info" size="lg" className="text-white">{LargeButton}</DropdownToggle>
                <DropdownMenu className="dropdown-block">
                  <DropdownItem href={Href}>Small button</DropdownItem>
                  <DropdownItem href={Href}>Medium button</DropdownItem>
                  <DropdownItem href={Href}>Large button</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href={Href}>Very large button </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {SizingList.map((data, index) => (
              <CommonDropDown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DropdownSizing;