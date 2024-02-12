import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import { Col } from "reactstrap";

const UpcomingDatePicker = () => {
  const [startDate, setStartDate] = useState<Date | null>(new Date());
  const [endDate, setEndDate] = useState<Date | null>(null);

  const onChange = (date: [Date | null, Date | null]) => {
    const [start, end] = date;
    setStartDate(start);
    setEndDate(end);
  };
  
  return (
    <Col xs="7">
      <div className="datepicker-here mod" id="datepicker">
        <ReactDatePicker selected={startDate} onChange={onChange} startDate={startDate} endDate={endDate} selectsRange inline />
      </div>
    </Col>
  );
};

export default UpcomingDatePicker;
