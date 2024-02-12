import React from "react";
import { Col, Container, Row } from "reactstrap";
import ListViewCard from "./ListViewCard";
import CardsPagination from "../Common/CardsPagination";
import Sidebar from "../Common";

const ListViewContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="3" className="xl-40 box-col-12">
          <div className="md-sidebar">
            <Sidebar />
          </div>
        </Col>
        <Col xl="9" className="xl-60 box-col-12">
          <ListViewCard />
          <CardsPagination />
        </Col>
      </Row>
    </Container>
  );
};

export default ListViewContainer;
