import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SupportTicketList } from "@/Constant";
import { SupportData } from "@/Data/Miscellaneous/SupportTicket";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TicketList from "./TicketList";
import TicketTable from "./TicketTable";

const SupportTicketContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col sm="12">
          <Card>
            <CommonCardHeader title={SupportTicketList} span={SupportData} headClass="card-no-border pb-0" />
            <CardBody>
              <TicketList />
              <TicketTable />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SupportTicketContainer;
