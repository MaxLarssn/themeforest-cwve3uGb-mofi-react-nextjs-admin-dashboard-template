import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CompanyJobPlaceholder, CompanyNameJob, LocationJob, LocationJobPlaceholder, PeriodJob, PositionJob, PositionJobPlaceholder } from "@/Constant";

const ExperienceClass = () => {
  const PositionsData: string[] = ["Web Designer", "Graphic Designer", "UI Designer", "UI/UX Designer"];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleChange2 = (date: Date) => setStartDate(date);
  const handleChange3 = (date: Date) => setEndDate(date);

  return (
    <Form className="theme-form">
      <Row>
        <Col xl="6" className="xl-100">
          <FormGroup>
            <Label check>{LocationJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder={LocationJobPlaceholder} />
          </FormGroup>
        </Col>
        <Col xl="6" className="ExperienceClass">
          <Label check className="col-form-label text-end pt-0">{PeriodJob}:<span className="font-danger">*</span></Label>
          <Row>
            <Col sm="6">
              <FormGroup><DatePicker className="form-control digits" selected={startDate} onChange={handleChange2}/></FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup><DatePicker className="form-control digits" selected={endDate} onChange={handleChange3}/></FormGroup>
            </Col>
          </Row>
        </Col>
        <Col xl="6" className="xl-100">
          <div className="col-form-label pt-0">{PositionJob}:<span className="font-danger">*</span></div>
          <FormGroup><Typeahead labelKey="name" multiple={false} options={PositionsData} id="Position" placeholder={PositionJobPlaceholder}/></FormGroup>
        </Col>
        <Col xl="6" className="xl-100">
          <FormGroup>
            <Label check>{CompanyNameJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder={CompanyJobPlaceholder}/>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};
export default ExperienceClass;
