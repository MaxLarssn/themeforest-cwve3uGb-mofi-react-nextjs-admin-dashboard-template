import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import SVG from "@/CommonComponent/SVG";
import { ImagePath, VariationRadios } from "@/Constant";
import { VariationRadioData, VariationRadioDataList } from "@/Data/Form&Table/Form";
import { VariationRadioProp } from "@/Types/FormType";
import { Card, CardBody, Col, FormGroup, Input, Label, Row } from "reactstrap";

const VariationRadio = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={VariationRadios} span={VariationRadioData} />
        <CardBody>
          <Row className="g-3">
            {VariationRadioDataList.map(({ colClass, title, child }, index) => (
              <Col xl="4" className={colClass ? colClass : ""} key={index}>
                <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
                  <h6 className="sub-title">{title}</h6>
                  {child.map(({ id, labelText, image, icon, name, defaultChecked, iconColor }:VariationRadioProp) => (
                    <div className="payment-wrapper" key={id}>
                      <div className="payment-first">
                        <FormGroup className="radio radio-primary" check>
                          <Input id={`ptm-${id}`} type="radio" name={name} value="option1" defaultChecked={defaultChecked} />
                          <Label className="mb-0" htmlFor={`ptm-${id}`}>{labelText}</Label>
                        </FormGroup>
                      </div>
                      {(image || icon) && (
                        <div className="payment-second">
                          {image && <img className="img-fluid" src={`${ImagePath}/${image}`} alt="ecommerce" />}
                          {icon && <SVG className={`mega-icons stroke-${iconColor}`} iconId={icon} />}
                        </div>
                      )}
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

export default VariationRadio;
