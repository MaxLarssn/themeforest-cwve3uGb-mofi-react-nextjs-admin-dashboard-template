import { Card, CardBody, Col, Input, InputGroup, Row } from "reactstrap";
import { CalendarDefault } from "@/Constant";
import Calendar from "react-calendar";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const DefaultCalendar = () => {
  const [dateValue, setDateValue] = useState<Date>(new Date());
  const date = `${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `

  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CalendarDefault}/>
        <CardBody className="card-wrapper">
          <Row className="g-3">
            <Col xs="12">
              <InputGroup className="main-inline-calender">
                <Input placeholder={`${dateValue.getDate()} - ${dateValue.getMonth() + 1} - ${dateValue.getFullYear()} `} className="mb-2 flatpickr-input" readOnly />
                <Calendar onChange={(value) => setDateValue(value as Date)} value={dateValue} className="w-100" />
              </InputGroup>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultCalendar;
