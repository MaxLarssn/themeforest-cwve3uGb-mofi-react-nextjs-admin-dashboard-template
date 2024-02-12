import React from "react";
import { Container, Row } from "reactstrap";
import UserData from "./ProfileUser/UserData";
import FirstData from "./FirstData";
import SecondData from "./SecondData";
import ThirdData from "./ThirdData";
import ForthData from "./ForthData";

const UsersProfileContainer = () => {
  return (
    <Container fluid>
      <div className="user-profile">
        <Row>
          <UserData />
          <FirstData />
          <SecondData />
          <ThirdData />
          <ForthData />
        </Row>
      </div>
    </Container>
  );
};

export default UsersProfileContainer;
