import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, SplitDropdowns, Widgets } from "@/Constant";
import React, { useState } from "react";
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownToggle } from "reactstrap";
import SplitButtonDropdown from "./SplitButtonDropdown";
import { SplitData, SplitList } from "@/Data/Uikits/dropdown";

const SplitDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col sm="12" xl="12">
      <Card>
        <CommonCardHeader title={SplitDropdowns} span={SplitData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <ButtonGroup>
              <Button color="primary" outline>{Widgets}</Button>
              <Dropdown className="separated-btn" isOpen={open} toggle={toggle}>
                <DropdownToggle color="primary"><i className="icofont icofont-arrow-down"></i></DropdownToggle>
                <div className="dropdown-content">
                  <a href={Href}>General</a>
                  <a href={Href}>Chart</a>
                </div>
              </Dropdown>
            </ButtonGroup>
            {SplitList.map((data, index) => (
              <SplitButtonDropdown key={index} item={data} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitDropdown;
