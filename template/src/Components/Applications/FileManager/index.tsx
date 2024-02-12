import React from "react";
import { Col, Container, Row } from "reactstrap";
import FileSideBar from "./FileSideBar";
import FileContent from "./FileContent";

const FileManagerContainer = () => {
  return (
    <Container fluid>
      <Row>
        <FileSideBar />
        <Col xl="9" md="12" className="box-col-12">
          <div className="file-content">
            <FileContent />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default FileManagerContainer;
