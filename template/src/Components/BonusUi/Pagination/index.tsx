import { Container, Row } from "reactstrap";
import DefaultPagination from "./DefaultPagination";
import PaginationActiveAndDisabled from "./PaginationActiveAndDisabled";
import PaginationWithIcons from "./PaginationWithIcons";
import RoundedPagination from "./RoundedPagination";
import PaginationAlignment from "./PaginationAlignment";
import PaginationSizing from "./PaginationSizing";

const PaginationsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultPagination />
        <PaginationActiveAndDisabled />
        <PaginationWithIcons />
        <RoundedPagination />
        <PaginationAlignment />
        <PaginationSizing />
      </Row>
    </Container>
  );
};

export default PaginationsContainer;
