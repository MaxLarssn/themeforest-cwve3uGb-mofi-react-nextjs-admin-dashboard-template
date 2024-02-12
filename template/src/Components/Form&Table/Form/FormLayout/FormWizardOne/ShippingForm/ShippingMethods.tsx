import { Button, Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ProceedNext } from "@/Constant";
import { ShippingInformationCommonProps } from "@/Types/FormType";
import { ShippingMethodData } from "@/Data/Form&Table/Form";

const ShippingMethods :React.FC<ShippingInformationCommonProps> = ({radioBoxValues,getUserData,handleNextButton,}) => {
  const { shippingMethod } = radioBoxValues;

  return (
    <Row className="shipping-method g-3">
      {ShippingMethodData.map((data, index) => (
        <Col sm="6" key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card">
            <FormGroup check className="radio radio-primary">
              <Input id={data.value} type="radio" name="shippingMethod" value={data.value} checked={shippingMethod === data.value} onChange={getUserData}/>
              <Label className="mb-0" htmlFor={data.value} check>{data.label}</Label>
            </FormGroup>
            <p>{data.details}</p>
          </div>
        </Col>
      ))}
      <Col xs="12" className="text-end">
        <Button onClick={handleNextButton} color="primary">{ProceedNext}<i className="fa fa-truck proceed-next pe-2" /></Button>
      </Col>
    </Row>
  );
};

export default ShippingMethods;
