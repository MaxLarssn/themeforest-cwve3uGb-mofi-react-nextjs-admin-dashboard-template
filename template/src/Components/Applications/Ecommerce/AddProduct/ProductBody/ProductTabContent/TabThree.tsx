import { Col, Form, Input, Label, Row, Tooltip } from "reactstrap";
import { City, Dimensions, Height, Length, ShippingClass, WeightKg, Width, ZipCode } from "@/Constant";
import { useState } from "react";
import { useAppDispatch } from "@/Redux/Hooks";
import { setFormValue } from "@/Redux/Reducers/AddProductSlice";

const TabThree = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  const dispatch = useAppDispatch()

  return (
    <div className="meta-body">
      <Form>
        <Row className="g-3 custom-input">
          <Col xs="12">
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
              <Col xs="12">
                <Label check> Where can I pick up my order? </Label>
              </Col>
              <Col md="4" sm="6" >
                <Input type="number" placeholder={`${ZipCode} (10001)`} name="zipCode" onChange={(e)=>dispatch(setFormValue({name:"zipCode",value:e.target.value}))} />
              </Col>
              <Col md="4" sm="6">
                <Input type="text" name="city" placeholder={City} onChange={(e)=>dispatch(setFormValue({name:"city",value:e.target.value}))} />
              </Col>
              <Col md="4">
                <Input type="select" defaultValue={"State"} name="state" onChange={(e)=>dispatch(setFormValue({name:"state",value:e.target.value}))}>
                  <option>{"State"}</option>
                  <option>{"Gujarat"}</option>
                  <option>{"Punjab"}</option>
                  <option>{"Himachal pradesh"}</option>
                  <option>{"Goa"} </option>
                  <option>{"Sikkim"} </option>
                  <option>{"Telangana"}</option>
                </Input>
              </Col>
            </Row>
          </Col>
          <Col xs="12">
            <Row>
              <Col xs="12">
                <Label check> {WeightKg} </Label>
                <i className="icon-help-alt ms-1" id="tooltip2" />
                <Tooltip target="tooltip2" placement="top" toggle={toggle} isOpen={tooltipOpen}>{"set proper weight for product items."}</Tooltip>
              </Col>
              <Col xs="12">
                <Input name="inputCity" type="number" onChange={(e)=>dispatch(setFormValue({name:"inputCity",value:e.target.value}))}/>
                <p className="f-light"> Decide if the product is a digital or physical item. Shipping may be necessary for real-world items. </p>
              </Col>
            </Row>
          </Col>
          <Col xs="12">
            <Row className="gx-xl-3 gx-md-2 gy-md-0 g-2">
              <Col xs="12">
                <Label check>{Dimensions}</Label>
                <i className="icon-help-alt ms-1" id="tooltip2"></i>
                <Tooltip target="tooltip2" placement="top" toggle={toggle} isOpen={tooltipOpen}>{"set proper length/width and height for product items."}</Tooltip>
              </Col>
              <Col md="4" sm="6">
                <Input id="inputCity" type="number" placeholder={Length}/>
              </Col>
              <Col md="4" sm="6">
                <Input id="inputCity" type="number" placeholder={Width} />
              </Col>
              <Col md="4">
                <Input id="inputCity" type="number" placeholder={Height} />
              </Col>
            </Row>
          </Col>
          <Col xs="12">
            <Row>
              <Col xs="12">
                <Label check> {ShippingClass} </Label>
              </Col>
              <Col md="12">
                <Input type="select" name="inputState" defaultValue={"Basic Shipping"} onChange={(e)=>dispatch(setFormValue({name:"inputState",value:e.target.value}))}>
                  <option>{"Basic Shipping"}</option>
                  <option>{"Expedited Shipping"}</option>
                  <option>{"International Shipping"}</option>
                  <option>{"Free Shipping"}</option>
                  <option>{"Same-Day or Next-Day Shipping"}</option>
                  <option>{"Flat Rate Shipping"}</option>
                  <option>{"Local Pickup"}</option>
                </Input>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TabThree;
