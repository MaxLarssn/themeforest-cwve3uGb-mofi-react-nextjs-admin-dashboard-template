import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Alignment, Href, WarningTop } from "@/Constant";
import { AlienmentData, AlienmentList } from "@/Data/Uikits/dropdown";
import { useState } from "react";
import { ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import CommonAlignment from "./CommonAlignment";

const Alignments = () => {
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);

    return (
      <Col lg="6">
        <Card>
          <CommonCardHeader title={Alignment} span={AlienmentData} />
          <CardBody className="dropdown-basic m-0">
            <div className="common-flex">
              <ButtonGroup>
                <Dropdown isOpen={open} toggle={toggle} direction="up">
                  <DropdownToggle caret color="warning" className="text-white">{WarningTop}</DropdownToggle>
                  <DropdownMenu className="dropdown-block">
                    <DropdownItem href={Href}>Be careful </DropdownItem>
                    <DropdownItem href={Href}>Notifications</DropdownItem>
                    <DropdownItem href={Href}>Beware</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </ButtonGroup>
              {AlienmentList.map((data, index) => (
                <CommonAlignment key={index} value={data} />
              ))}
            </div>
          </CardBody>
        </Card>
      </Col>
    );
};

export default Alignments;
