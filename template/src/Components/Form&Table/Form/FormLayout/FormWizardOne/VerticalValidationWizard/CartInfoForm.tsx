import { ChangeEvent, useState } from "react";
import { Button, Col, Form, Row } from "reactstrap";
import { Next, Previous } from "@/Constant";
import { CardDetails } from "./CardDetails";
import { CardTypeDetail } from "./CardTypeDetail";
import { CardDataForm } from "./CardDataForm";
import { VerticalValidationWizardFormPropsType } from "@/Types/FormType";
import ShowError from "@/Components/Other/Authentication/RegisterWizard/common/ShowError";

const CartInfoForm :React.FC<VerticalValidationWizardFormPropsType>= ({ activeCallBack }) => {
  const [cartInfoForm, setCartInfoForm] = useState({ recipientUserName: "", userName: "", cardNumber: "", expirationDate: "", cvvNumber: "", documentationName: "" });
  const { recipientUserName, userName, cardNumber, expirationDate, cvvNumber, documentationName } = cartInfoForm;

  const getUserData = (event: ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = name === "rememberNextTime" ? event.target.checked : name === "documentationName" ? event.target.files && event.target.files[0].name : event.target.value;
    setCartInfoForm({ ...cartInfoForm, [name]: value });
  };

  const handleNextButton = () => {
    if (recipientUserName !== "" && userName !== "" && cardNumber !== "" && expirationDate !== "" && cvvNumber !== "" && documentationName !== "") {
      activeCallBack(3);
    } else {
      ShowError();
    }
  };

  return (
    <Form className="g-3 needs-validation custom-input" noValidate>
      <Row>
        <CardTypeDetail />
        <CardDetails cartInfoForm={cartInfoForm} getUserData={getUserData} />
        <CardDataForm cartInfoForm={cartInfoForm} getUserData={getUserData}/>        
        <Col xs="12" className="text-end">
          <Button onClick={() => activeCallBack(1)} color="primary">{Previous}</Button>
          <Button className="ms-1" onClick={handleNextButton} color="primary">{Next}</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default CartInfoForm;
