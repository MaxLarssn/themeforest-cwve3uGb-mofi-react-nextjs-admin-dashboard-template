import React from "react";
import { Container, Row } from "reactstrap";
import DefaultCalendar from "./DefaultCalendar";
import BootstrapCalendar from "./ReactstrapCalendar";
import DatesPicker from "./DatesPicker";
import TimePicker from "./TimePicker";

const DatePickerContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultCalendar />
        <BootstrapCalendar />
        <DatesPicker />
        <TimePicker />
      </Row>
    </Container>
  );
};

export default DatePickerContainer;
