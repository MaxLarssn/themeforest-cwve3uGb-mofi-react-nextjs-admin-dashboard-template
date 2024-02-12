import { Card, Col, Row } from "reactstrap";
import { CalendarBootstrap } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BootstrapCalendarBody } from "./BootstrapCalendarBody";

const BootstrapCalendar = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={CalendarBootstrap} />
        <BootstrapCalendarBody/>
      </Card>
    </Col>
  );
};

export default BootstrapCalendar;
