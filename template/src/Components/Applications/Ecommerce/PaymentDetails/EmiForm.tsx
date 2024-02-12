import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Emi, FirstName, ImagePath, LastName, Pincode, Submit } from "@/Constant";
import { Button, Card, CardBody, Col, Form, FormGroup, Row } from "reactstrap";
import FormGroupCommon from "./Common/FormGroupCommon";
import SelectCommon from "./Common/SelectCommon";

const EmiForm = () => {
  const EmiBankSelect: string[] = ["Bank Name", "SBI", "ICICI", "KOTAK", "BOB"];
  const EmiCardSelect: string[] = ["Select Card", "2", "3", "4", "5"];
  const EmiYearSelect: string[] = ["Select Duration", "2015-2016", "2016-2017", "2017-2023", "2023-2019"];

  return (
    <Col xxl="4" lg="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={Emi} headClass="py-4" />
        <CardBody>
          <Form className="theme-form" onSubmit={(e) => e.preventDefault()}>
            <Row>
              <FormGroupCommon type="text" placeholder={FirstName} formClass="col-6 p-r-0" />
              <FormGroupCommon type="text" placeholder={LastName} formClass="col-6" />
              <FormGroupCommon type="text" placeholder={Pincode} formClass="col-6 p-r-0" />
              <SelectCommon size={1} data={EmiBankSelect} selectClass="col-6" />
              <SelectCommon size={1} data={EmiCardSelect} selectClass="col-12" />
              <SelectCommon size={1} data={EmiYearSelect} selectClass="col-12" />
              <FormGroup>
                <Col xs="12">
                  <ul className="payment-opt">
                    <li><img src={`${ImagePath}/ecommerce/mastercard.png`} alt="" /></li>
                    <li><img src={`${ImagePath}/ecommerce/visa.png`} alt="" /></li>
                    <li><img src={`${ImagePath}/ecommerce/paypal.png`} alt="" /></li>
                  </ul>
                </Col>
              </FormGroup>
              <Col xs="12">
                <Button color="primary">{Submit}</Button>
              </Col>
            </Row>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EmiForm;
