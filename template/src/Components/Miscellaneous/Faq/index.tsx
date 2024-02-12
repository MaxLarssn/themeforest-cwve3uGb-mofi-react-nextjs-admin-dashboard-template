import React from "react";
import { Container, Row } from "reactstrap";
import Articals from "./Articals";
import Questions from "./Questions";
import FAQFeaturesTutorial from "./FAQFeaturesTutorial";
import ArticeVideo from "./ArticeVideo";

const FaqContainer = () => {
  return (
    <Container fluid>
      <div className="faq-wrap">
        <Row>
          <Articals />
          <Questions />
          <FAQFeaturesTutorial />
          <ArticeVideo />
        </Row>
      </div>
    </Container>
  );
};

export default FaqContainer;
