import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import { DefaultRadios } from "@/Constant";
import { CustomRadios } from "./CustomRadios";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultRadioData, DefaultRadioDataList } from "@/Data/Form&Table/Form";

const DefaultRadio = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DefaultRadios} span={DefaultRadioData} />
        <CardBody>
          <Row className="g-3">
            <CustomRadios />
            {DefaultRadioDataList.map(({ title, span, className }, index) => (
              <Col sm="6" xl="4" key={index}>
                <div className="card-wrapper border rounded-3 checkbox-checked">
                  <h6 className="sub-title">{title}</h6>
                  {span.map(({ id, label, defaultChecked, disabled }, index) => (
                    <div className={`form-check ${className}`} key={index}>
                      <Input id={id} type="radio" name="flexRadioDefault" defaultChecked={defaultChecked} disabled={disabled} />
                      <Label htmlFor={id} check>
                        {label}
                      </Label>
                    </div>
                  ))}
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultRadio;
