"use client";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import { UserForm } from "./UserForm";

const UserLogin = () => {
  return (
    <Container fluid className="p-0">
      <Row className="m-0">
        <Col xs="12" className="p-0">
          <div className="login-card login-dark">
            <UserForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UserLogin;
