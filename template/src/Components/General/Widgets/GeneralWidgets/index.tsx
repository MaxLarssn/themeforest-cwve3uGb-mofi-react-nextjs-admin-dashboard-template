import React from "react";
import { Container, Row } from "reactstrap";
import TotalSells from "./TotalSells";
import WebsiteDesign from "./WebsiteDesign";
import OpeningOfLeaflets from "./OpeningOfLeaflets";
import Visitors from "./Visitors";
import SocialWidget from "./SocialWidget";
import TotalStudents from "./TotalStudents";
import UpcomingAppointment from "./UpcomingAppointment";

const GeneralWidgetsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <TotalSells />
        <WebsiteDesign />
        <OpeningOfLeaflets />
        <Visitors />
        <SocialWidget />
        <TotalStudents />
        <UpcomingAppointment />
      </Row>
    </Container>
  );
};

export default GeneralWidgetsContainer;
