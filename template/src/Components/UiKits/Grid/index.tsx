import { Container, Row } from "reactstrap";
import GridOptionsCart from "./GridOptions";
import GridColumnCart from "./GridColumn";
import VerticalAlignmentCart from "./VerticalAlignment";
import HorizontalAlignmentCart from "./HorizontalAlignment";
import NestingCart from "./Nesting";
import OrderCart from "./Order";
import OffsetCart from "./Offset";

const GridContainer = () => {
  return (
    <Container fluid>
      <Row>
        <GridOptionsCart />
        <GridColumnCart />
        <VerticalAlignmentCart />
        <HorizontalAlignmentCart />
        <NestingCart />
        <OrderCart />
        <OffsetCart />
      </Row>
    </Container>
  );
};

export default GridContainer;
