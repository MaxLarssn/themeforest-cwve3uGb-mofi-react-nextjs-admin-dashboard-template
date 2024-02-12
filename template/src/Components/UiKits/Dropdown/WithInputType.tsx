import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Inputs, WithInputTypes } from "@/Constant";
import { WithInputData } from "@/Data/Uikits/dropdown";
import React, { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownMenu, DropdownToggle, Input, InputGroup } from "reactstrap";

const WithInputType = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={WithInputTypes} span={WithInputData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <ButtonGroup>
              <Dropdown isOpen={open} toggle={toggle}>
                <DropdownToggle caret color="warning" className="text-white">{Inputs}</DropdownToggle>
                <DropdownMenu className="dropdown-block dropdown-wrapper dark-input-type">
                  <li>
                    <InputGroup className="rounded-0 border-0 shadow-none">
                      <div className="input-group-text">
                        <Input className="mt-0" type="checkbox" value="" />
                      </div>
                      <span>Default checkbox</span>
                    </InputGroup>
                    <InputGroup className="input-group rounded-0 border-0 shadow-none">
                      <div className="input-group-text">
                        <Input className="mt-0" type="radio" value="" />
                      </div>
                      <span>Default radio</span>
                    </InputGroup>
                  </li>
                </DropdownMenu>
              </Dropdown>
            </ButtonGroup>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithInputType;
