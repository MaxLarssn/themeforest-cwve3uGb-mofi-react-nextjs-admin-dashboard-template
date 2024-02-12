import React, { useState } from "react";
import { Card, CardBody, Col, Nav, NavLink } from "reactstrap";
import { MaterialLeftSideTabContent } from "./MaterialLeftSideTabContent";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Home, Href, Inbox, MaterialStyleLeftTab, Profile, Settings } from "@/Constant";
import { MaterialData } from "@/Data/Uikits/tabs";

const MaterialStyleLeftTabs = () => {
  const [basicTab, setBasicTab] = useState("1");
  return (
    <Col xxl="6">
      <Card>
        <CommonCardHeader title={MaterialStyleLeftTab} span={MaterialData} />
        <CardBody>
          <div className="tabs-responsive-side">
            <div className="material-wrapper">
              <div className="d-flex">
                <Nav className="flex-column nav-secondary border-tab nav-left">
                  <NavLink href={Href} className={`nav-effect ${basicTab === "1" ? "active" : ""}`} onClick={() => setBasicTab("1")}>{Home}</NavLink>
                  <NavLink href={Href} className={`nav-effect ${basicTab === "2" ? "active" : ""}`} onClick={() => setBasicTab("2")}>{Profile}</NavLink>
                  <NavLink href={Href} className={`nav-effect ${basicTab === "3" ? "active" : ""}`} onClick={() => setBasicTab("3")}>{Inbox}</NavLink>
                  <NavLink href={Href} className={`nav-effect ${basicTab === "4" ? "active" : ""}`} onClick={() => setBasicTab("4")}>{Settings}</NavLink>
                </Nav>
              </div>
              <MaterialLeftSideTabContent basicTab={basicTab}/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MaterialStyleLeftTabs;
