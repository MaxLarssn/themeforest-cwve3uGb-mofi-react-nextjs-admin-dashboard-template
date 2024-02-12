import React from "react";
import { Container, Row } from "reactstrap";
import CreditCard from "./CreditCard";
import DebitCard from "./DebitCard";
import CodForm from "./CodForm";
import EmiForm from "./EmiForm";
import NetBanking from "./NetBanking";

const PaymentDetailsContainer = () => {
  return (
    <Container fluid className="credit-card">
      <Row>
        <CreditCard />
        <DebitCard />
        <CodForm />
        <EmiForm />
        <NetBanking />
      </Row>
    </Container>
  );
};

export default PaymentDetailsContainer;
