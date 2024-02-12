import React from "react";
import { Container, Row } from "reactstrap";
import KnowledgebaseHelp from "./KnowledgebaseHelp";
import CategoryData from "./CategoryData";
import FeaturesTutorial from "./FeaturesTutorial";
import ArticalAndVideo from "./ArticalVideo";
import Articals from "../Faq/Articals";

const KnowledgebaseContainer = () => {
  return (
    <Container fluid>
      <Row>
        <KnowledgebaseHelp />
        <Articals />
        <CategoryData />
        <FeaturesTutorial />
        <ArticalAndVideo />
      </Row>
    </Container>
  );
};

export default KnowledgebaseContainer;
