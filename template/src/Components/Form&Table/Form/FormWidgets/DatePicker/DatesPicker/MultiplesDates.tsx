import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import { Col, InputGroup, Label, Row } from "reactstrap";
import { MultiplesDatesHeading } from "@/Constant";

export const MultiplesDates = () => {
  const [value, setValue] = useState<DateObject | DateObject[] | null>(new DateObject());

  return (
    <Row>
      <Col xxl="3" className="box-col-12">
        <Label className="box-col-12 text-start" check>{MultiplesDatesHeading}</Label>
      </Col>
      <Col xxl="9" className="box-col-12">
        <InputGroup className="flatpicker-calender">
          <DatePicker monthYearSeparator="::" inputClass="form-control" multiple value={value} onChange={setValue} />
        </InputGroup>
      </Col>
    </Row>
  );
};
