import { Date, DateFormatHeading, DateFormatType } from "@/Constant";
import { CleaveInputType } from "@/Types/FormType";
import Cleave from "cleave.js";
import { useEffect, useRef } from "react";
import { Col, Form, Input, Label, Row } from "reactstrap";

const CleaveInput: React.FC<CleaveInputType> = ({ className, options, placeholder }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      new Cleave(inputRef.current, options);
    }
  }, [options]);

  return <Input innerRef={inputRef} className={className} placeholder={placeholder} />;
};

const DateFormat = () => {
  const dateOptions = {
    date: true,
    delimiter: "-",
    datePattern: ["d", "m", "Y"],
  };

  const monthYearOptions = {
    date: true,
    delimiter: "-",
    datePattern: ["m", "Y"],
  };

  return (
    <Col sm="6">
      <div className="card-wrapper border rounded-3 light-card checkbox-checked">
        <h6 className="sub-title">{DateFormatHeading}</h6>
        <Form>
          <Row className="g-3">
            <Col xs="12">
              <Label className="col-form-label">{Date}</Label>
              <CleaveInput className="form-control" options={dateOptions} placeholder="DD-MM-YYYY" />
            </Col>
            <Col xs="12">
              <Label className="col-form-label" htmlFor="cleave-date2">{DateFormatType}</Label>
              <CleaveInput className="form-control" options={monthYearOptions} placeholder="MM-YYYY" />
            </Col>
          </Row>
        </Form>
      </div>
    </Col>
  );
};

export default DateFormat;
