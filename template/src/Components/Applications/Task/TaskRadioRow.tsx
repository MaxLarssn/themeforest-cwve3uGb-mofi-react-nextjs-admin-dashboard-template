import { Mail, Notification, RemindOn } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { Col, FormGroup, Label } from "reactstrap";

export const TaskRadioRow = () => {
  const timeList = ["7:00 am", "7:30 am", "8:00 am", "8:30 am", "9:00 am", "9:30 am", "10:00 am", "10:30 am", "11:00 am", "11:30 am", "12:00 am", "12:30 am", "1:00 pm", "2:00 pm", "3:00 pm", "4:00 pm"];

  const [startDate, setStartDate] = useState(new Date());
  const handleChange = (date: Date) => setStartDate(date);
  const { validation } = useAppSelector((state) => state.task);

  return (
    <Col md="12" className="mt-0">
      <FormGroup>
        <div className="d-flex date-details">
          <div className="d-inline-block">
            <Label className="d-block mb-0" htmlFor="chk-ani" check>
              <input className="checkbox_animated" id="chk-ani" type="checkbox" />
              {RemindOn}
            </Label>
          </div>
          <div className="d-inline-block">
            <DatePicker className={`form-control flatpickr-input ${validation ? "is-valid" : ""}`} selected={startDate} onChange={handleChange} />
          </div>
          <div className="d-inline-block">
            <select className={`form-control ${validation ? "is-valid" : ""}`}>
              {timeList.map((item, index) => (
                <option key={index}>{item}</option>
              ))}
            </select>
          </div>
          <div className="d-inline-block">
            <Label className="d-block mb-0" htmlFor="chk-ani1" check>
              <input className="checkbox_animated" id="chk-ani1" type="checkbox" />
              {Notification}
            </Label>
          </div>
          <div className="d-inline-block">
            <Label className="d-block mb-0" htmlFor="chk-ani2" check>
              <input className="checkbox_animated" id="chk-ani2" type="checkbox" />
              {Mail}
            </Label>
          </div>
        </div>
      </FormGroup>
    </Col>
  );
};
