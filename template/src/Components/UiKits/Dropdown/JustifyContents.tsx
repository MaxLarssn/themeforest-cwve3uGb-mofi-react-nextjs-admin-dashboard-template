import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, JustifyContent, TextLeft } from "@/Constant";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";
import { JustifyData, JustifyList } from "@/Data/Uikits/dropdown";

const JustifyContents = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={JustifyContent} span={JustifyData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="primary" className="text-white">{TextLeft}</DropdownToggle>
                <DropdownMenu className="dropdown-block text-start">
                  <DropdownItem href={Href}>Hello..</DropdownItem>
                  <DropdownItem href={Href}>How are you?</DropdownItem>
                  <DropdownItem href={Href}>What are you doing?</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
            {JustifyList.map((data, index) => (
              <CommonDropDown item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JustifyContents;
