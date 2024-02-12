import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AboutUs, Blog, ContactUs, Href, PillsTab } from "@/Constant";
import { PillsTabData } from "@/Data/Uikits/tabs";
import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavItem, NavLink } from "reactstrap";
import { PillsTabContent } from "./PillsTabContent";

const PillsTabs = () => {
  const [basicTab, setBasicTab] = useState("3");
  return (
    <Col sm="12" xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={PillsTab} span={PillsTabData} />
        <CardBody>
          <Nav pills className="nav-primary">
            <NavItem><NavLink href={Href} className={basicTab === "1" ? "active" : ""} onClick={() => setBasicTab("1")}>{AboutUs}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={basicTab === "2" ? "active" : ""} onClick={() => setBasicTab("2")}>{ContactUs}</NavLink></NavItem>
            <NavItem><NavLink href={Href} className={basicTab === "3" ? "active" : ""} onClick={() => setBasicTab("3")}>{Blog}</NavLink></NavItem>
          </Nav>
          <PillsTabContent basicTab={basicTab}/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PillsTabs;
