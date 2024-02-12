import { HourMonthType, TimeFormatHeading, TimeFormatType } from "@/Constant";
import { CleaveInputType } from "@/Types/FormType";
import Cleave from "cleave.js";
import React, { useEffect, useRef } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";

const CleaveInput :React.FC<CleaveInputType>= ({ className, options, placeholder }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      new Cleave(inputRef.current, options);
    }
  }, [options]);

  return <Input innerRef={inputRef} className={className} placeholder={placeholder} />;
};

const TimeFormat = () => {
  const timeFormatOptions = {
    time: true,
    timePattern: ["h", "m", "s"],
  };

  const hourMinuteOptions = {
    time: true,
    timePattern: ["h", "m"],
  };

  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 light-card checkbox-checked">
        <h6 className="sub-title">{TimeFormatHeading}</h6>
        <Form>
          <Row className="g-3">
            <Col xs="12">
              <Label className="col-form-label">{TimeFormatType}</Label>
              <CleaveInput className="form-control" options={timeFormatOptions} placeholder="hh:mm:ss" />
            </Col>
            <Col xs="12">
              <Label className="col-form-label" htmlFor="cleave-time2">{HourMonthType}</Label>
              <CleaveInput className="form-control" options={hourMinuteOptions} placeholder="hh:mm" />
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};

export default TimeFormat;
