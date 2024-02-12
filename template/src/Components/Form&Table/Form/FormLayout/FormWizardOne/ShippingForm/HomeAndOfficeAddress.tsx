import { HomeAndOfficeData } from "@/Data/Form&Table/Form";
import { ShippingInformationCommonProps } from "@/Types/FormType";
import { Col, Row, FormGroup, Input, Label } from "reactstrap";

const HomeAndOfficeAddress :React.FC<ShippingInformationCommonProps> = ({radioBoxValues,getUserData,}) => {
  const { address } = radioBoxValues;

  return (
    <Row className="g-3">
      {HomeAndOfficeData.map((data, index) => (
        <Col xxl="4" sm="6" key={index}>
          <div className="card-wrapper border rounded-3 h-100 light-card shipping-wizard">
            <div className="collect-address">
              <div className="d-flex gap-2 align-items-center">
                <FormGroup check className="radio radio-primary">
                  <Input id={data.value} type="radio" name="address" value={data.value} checked={address === data.value} onChange={getUserData}/>
                  <Label className="mb-0" htmlFor={data.value} check>{data.label}</Label>
                </FormGroup>
              </div>
              <div className="card-icon">
                <i className="fa fa-pencil" />
                <i className="fa fa-trash-o" />
              </div>
            </div>
            <div className="shipping-address">
              <h6>{data.name}</h6>
              <span>Address: {data.address}</span>
              <span>Contact: {data.contact}</span>
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default HomeAndOfficeAddress;
