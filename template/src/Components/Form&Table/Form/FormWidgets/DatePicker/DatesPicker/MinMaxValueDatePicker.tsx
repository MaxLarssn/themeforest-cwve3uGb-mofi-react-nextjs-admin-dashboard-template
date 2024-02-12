import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { MinMaxValue } from "@/Constant";

const MinMaxValueDatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());

  const maxDate = () => {
    const today = new Date();
    return new Date(today.setDate(today.getDate() + 5));
  };

  return (
    <Row>
      <Col xxl="3" className="box-col-12">
        <Label className="box-col-12 text-start" check>{MinMaxValue}</Label>
      </Col>
      <Col xxl="9" className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker className="form-control flatpickr-input" selected={startDate} onChange={(date: Date) => setStartDate(date)} minDate={new Date()} maxDate={maxDate()} placeholderText="Select a date in February 2020" />
        </InputGroup>
      </Col>
    </Row>
  );
};

export default MinMaxValueDatePicker;