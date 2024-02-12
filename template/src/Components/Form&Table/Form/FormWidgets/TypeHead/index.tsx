import React from "react";
import { Container, Row } from "reactstrap";
import BasicTypeAhead from "./BasicTypeAhead";
import PreFetch from "./PreFetch";
import BloodHound from "./BloodHound";
import RemoteTypeAhead from "./RemoteTypeAhead";
import CustomTemplates from "./CustomTemplates";
import MultipleSectionsWithHeaders from "./MultipleSectionsWithHeaders";
import ScrollableDropdownMenu from "./ScrollableDropdownMenu";
import RtlSupport from "./RtlSupport";

const TypeHeadContainer = () => {
  return (
    <Container fluid>
      <div className="typeahead typeahead-wrapper">
        <Row>
          <BasicTypeAhead />
          <PreFetch />
          <BloodHound />
          <RemoteTypeAhead />
          <CustomTemplates />
          <MultipleSectionsWithHeaders />
          <ScrollableDropdownMenu />
          <RtlSupport />
        </Row>
      </div>
    </Container>
  );
};

export default TypeHeadContainer;
