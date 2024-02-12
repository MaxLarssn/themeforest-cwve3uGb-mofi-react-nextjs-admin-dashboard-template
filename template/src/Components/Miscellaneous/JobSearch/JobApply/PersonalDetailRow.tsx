import { Typeahead } from "react-bootstrap-typeahead";
import { Col, FormGroup, Row } from "reactstrap";
import { BirthDateJob } from "@/Constant";

const PersonalDetailRow = () => {
const DaysJob: string[] = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
const MonthsJob: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const YearsJob: string[] = ["1985", "1986", "1987", "1988", "1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001", "2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015"];

  return (
    <Row>
      <Col sm="4">
        <div className="col-form-label pt-0">{BirthDateJob}</div>
        <FormGroup>
          <Typeahead labelKey="name" multiple={false} id="Month" options={MonthsJob} placeholder="Choose a Month..."/>
        </FormGroup>
      </Col>
      <Col sm="4">
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={DaysJob} id="date" placeholder="date"/>
        </FormGroup>
      </Col>
      <Col sm="4">
        <div className="col-form-label m-2 d-sm-block d-none"></div>
        <FormGroup className="select-no-label">
          <Typeahead labelKey="name" multiple={false} options={YearsJob} id="Year" placeholder="Year"/>
        </FormGroup>
      </Col>
    </Row>
  );
};

export default PersonalDetailRow;
