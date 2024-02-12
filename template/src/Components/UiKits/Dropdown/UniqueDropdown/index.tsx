import { Card, CardBody, Col, Dropdown, DropdownMenu, DropdownToggle } from "reactstrap";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Text, UniqueDropdownName } from "@/Constant";
import { DropdownForm } from "./DropdownForm";
import { UniqueData } from "@/Data/Uikits/dropdown";

const UniqueDropdown = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader title={UniqueDropdownName} span={UniqueData} />
        <CardBody className="rtl-dropdown">
          <div className="common-flex">
            <DropdownForm />
            <Dropdown isOpen={open} toggle={toggle}>
              <DropdownToggle caret color="dark" className="text-white">{Text}</DropdownToggle>
              <DropdownMenu className="p-4 text-muted form-wrapper">
                <p>Some example text that&apos;s free-flowing within the dropdown menu.</p>
                <p className="mb-0">And this is more example text. </p>
              </DropdownMenu>
            </Dropdown>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UniqueDropdown;
