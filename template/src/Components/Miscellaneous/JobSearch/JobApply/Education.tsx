import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { CollagePlaceholder, CollegeNameJob, DegreeLevelJob, DegreePlaceholder, PeriodJob, SpecializationJob, SpecializationPlaceholder } from "@/Constant";

const EducationClass = () => {
   const TypeHeadOptionsData: string[] = ["Student", "Bachelor", "Master", "Associate"];
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const handleChange = (date: Date) => setStartDate(date);
  const handleChange1 = (date: Date) => setEndDate(date);

  return (
    <Form className="theme-form">
      <Row>
        <Col xl="6" className="xl-100">
          <FormGroup>
            <Label check>{CollegeNameJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder={CollagePlaceholder} />
          </FormGroup>
        </Col>
        <Col xl="6" className="xl-100">
          <Label check className="col-form-label text-end pt-0">{PeriodJob}:<span className="font-danger">*</span></Label>
          <Row>
            <Col sm="6">
              <FormGroup><DatePicker className="form-control digits" selected={startDate} onChange={handleChange}/></FormGroup>
            </Col>
            <Col sm="6">
              <FormGroup><DatePicker className="form-control digits" selected={endDate} onChange={handleChange1}/></FormGroup>
            </Col>
          </Row>
        </Col>
        <Col lg="6">
          <div className="col-form-label pt-0">{DegreeLevelJob}:<span className="font-danger">*</span></div>
          <FormGroup><Typeahead id="Degree" labelKey="name" multiple={false} options={TypeHeadOptionsData} placeholder={DegreePlaceholder} /></FormGroup>
        </Col>
        <Col lg="6">
          <FormGroup>
            <Label check>{SpecializationJob}:<span className="font-danger">*</span></Label>
            <Input type="text" placeholder={SpecializationPlaceholder}/>
          </FormGroup>
        </Col>
      </Row>
    </Form>
  );
};

export default EducationClass;
