import { ChangeEvent, useState } from "react";
import { Button, Col, Row } from "reactstrap";
import { PaymentInformation, ProceedNext } from "@/Constant";
import CashOnDelivery from "./CashOnDelivery";
import CreditCardOption from "./CreditCardOption";
import PayPalOption from "./PayPalOption";
import { BillingFormProp } from "@/Types/FormType";
import ShowError from "@/Components/Other/Authentication/RegisterWizard/common/ShowError";

const PaymentForm :React.FC<BillingFormProp> = ({ callbackActive }) => {
  const [paymentMethodName, setPaymentMethodName] = useState("");
  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setPaymentMethodName(value);
  };

  const handleNextButton = () => {
    if (paymentMethodName !== "") {
      callbackActive(4);
    } else {
      ShowError();
    }
  };

  return (
    <>
      <h6>{PaymentInformation}</h6>
      <p className="f-light">Fill up the following information to send you the order</p>
      <div className="payment-info-wrapper">
        <Row className="shipping-method g-3">
          <PayPalOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
          <CreditCardOption paymentMethodName={paymentMethodName} getUserData={getUserData}/>
          <CashOnDelivery paymentMethodName={paymentMethodName} getUserData={getUserData}/>
          <Col xs="12" className="text-end">
            <Button color="primary" onClick={handleNextButton} className="btn-">{ProceedNext}<i className="fa fa-truck proceed-next pe-2" /></Button>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default PaymentForm;
