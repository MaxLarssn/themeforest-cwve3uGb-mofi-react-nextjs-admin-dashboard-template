import React from "react";
import { Card, CardBody, Container, Row } from "reactstrap";
import DragCalendar from "./DragCalendar";

const CalenderContainer = () => {
  return (
    <Container fluid className="calendar-basic">
      <Card>
        <CardBody>
          <Row>
            <DragCalendar />
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default CalenderContainer;
