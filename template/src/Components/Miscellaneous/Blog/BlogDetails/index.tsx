import React from "react";
import { Container, Row } from "reactstrap";
import MarkjencoBlog from "./MarkjencoBlog";
import BlogWithDetails from "./BlogWithDetails";
import BlogWithoutDetails from "./BlogWithoutDetails";

const BlogDetailsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <MarkjencoBlog />
        <BlogWithDetails />
        <BlogWithoutDetails />
      </Row>
    </Container>
  );
};

export default BlogDetailsContainer;
