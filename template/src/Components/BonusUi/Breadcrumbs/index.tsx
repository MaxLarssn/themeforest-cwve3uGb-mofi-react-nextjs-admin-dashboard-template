import { Container, Row } from "reactstrap";
import DefaultBreadcrumb from "./DefaultBreadcrumb";
import DividerBreadcrumb from "./DividerBreadcrumb";
import WithIconsBreadcrumb from "./WithIconsBreadcrumb";
import VariationOfBreadcrumb from "./VariationOfBreadcrumb";
import ColoredBreadcrumb from "./ColoredBreadcrumb";

const BreadcrumbContainer = () => {
  return (
    <Container fluid>
      <Row className="default-breadcrumb">
        <DefaultBreadcrumb />
        <DividerBreadcrumb />
        <WithIconsBreadcrumb />
        <VariationOfBreadcrumb />
        <ColoredBreadcrumb />
      </Row>
    </Container>
  );
};

export default BreadcrumbContainer;
