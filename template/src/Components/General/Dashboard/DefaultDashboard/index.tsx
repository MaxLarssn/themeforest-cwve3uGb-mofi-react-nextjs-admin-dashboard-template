import React from "react";
import { Container, Row } from "reactstrap";
import UserInfo from "./UserInfo";
import OpeningOfLeaflets from "./OpeningOfLeaflets";
import ShiftsOverview from "./ShiftsOverview";
import ProjectsTable from "./ProjectsTable";
import CustomerTransaction from "./CustomerTransaction";
import UserNotifications from "./UserNotifications";
import UpcomingAppointments from "./UpcomingAppointments";
import ActiveMembers from "./ActiveMembers";
import SalesStatistic from "./SalesStatistic";
import SalesByProduct from "./SalesByProduct";

const DefaultDashboardContainer = () => {
  return (
    <Container fluid className="default-dashboard">
      <Row className="widget-grid">
        <UserInfo />
        <OpeningOfLeaflets />
        <ShiftsOverview />
        <ProjectsTable />
        <CustomerTransaction />
        <UserNotifications />
        <UpcomingAppointments />
        <ActiveMembers />
        <SalesStatistic />
        <SalesByProduct />
      </Row>
    </Container>
  );
};

export default DefaultDashboardContainer;
