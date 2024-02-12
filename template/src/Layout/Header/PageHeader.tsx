import { Col, Row } from "reactstrap";
import { Searchbar } from "./ReponsiveSearch/Searchbar";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderRight } from "./HeaderRight";

export const PageHeader = () => {
  return (
    <Col className="header-wrapper m-0">
      <Row>
        <Searchbar />
        <HeaderLogo />
        <HeaderRight/>
      </Row>
    </Col>
  );
};
