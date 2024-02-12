import { Card, CardBody, Col, Input, Label, Row } from "reactstrap";
import { DefaultSwitche } from "@/Constant";
import { CustomSwitche } from "./CustomSwitche";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultSwitchData, DefaultSwitchDataList } from "@/Data/Form&Table/Form";

const DefaultSwitches = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DefaultSwitche} span={DefaultSwitchData} />
        <CardBody>
          <Row className="g-3">
            <CustomSwitche/>
            {DefaultSwitchDataList.map(({ title, span, className, inputClass }, index) => (
              <Col md="6" xl="4" key={index}>
                <div className="card-wrapper border rounded-3 rtl-input checkbox-checked">
                  <h6 className="sub-title">{title}</h6>
                  {span.map(({ id, label, defaultChecked, disabled }, index) => (
                    <div className={`form-check form-switch ${className}`} key={index}>
                      <Input id={id} type="switch" className={inputClass} role="switch" defaultChecked={defaultChecked} disabled={disabled} />
                      <Label htmlFor={id} check>{label}</Label>
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

export default DefaultSwitches;
