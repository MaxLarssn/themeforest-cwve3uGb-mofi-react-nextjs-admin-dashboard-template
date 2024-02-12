import { Col, Label, Row } from "reactstrap";
import ReactDatePicker from "react-datepicker";
import { useState } from "react";
import { PublishDateTime } from "@/Constant";

const SelectFive = () => {
    const [startDate, setStartDate] = useState(new Date());

    const handleChange = (date: Date) => setStartDate(date);

  return (
    <Col sm="6">
      <Row>
        <Col xs="12">
          <Label for="validationServer01" check> {PublishDateTime} </Label>
          <div className="input-group flatpicker-calender product-date">
            <ReactDatePicker className="form-control flatpickr-input" selected={startDate} onChange={handleChange} />
          </div>
        </Col>
      </Row>
    </Col>
  );
};

export default SelectFive;
