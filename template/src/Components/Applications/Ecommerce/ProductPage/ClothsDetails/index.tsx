import { Col, Nav, NavItem, NavLink } from "reactstrap";
import { Href } from "@/Constant";
import { useState } from "react";
import ClothsDetailsTabContent from "./ClothsDetailsTabContent";

const ClothsDetails = () => {
  const ClothsDetailsData: string[] = ["Febric", "Video", "Details", "Brand"];

  const [activeTab, setActiveTab] = useState(1);
  return (
    <Col sm="12">
      <Nav tabs className="border-tab nav-primary mb-0">
        {ClothsDetailsData.map((data, index) => (
          <NavItem key={index}>
            <NavLink href={Href} className={activeTab === index + 1 ? "active" : ""} onClick={() => setActiveTab(index + 1)}>
              {data}
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <ClothsDetailsTabContent activeTab={activeTab} />
    </Col>
  );
};

export default ClothsDetails;
