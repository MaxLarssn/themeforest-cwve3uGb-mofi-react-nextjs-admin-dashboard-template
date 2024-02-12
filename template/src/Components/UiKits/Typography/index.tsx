import { Container, Row } from "reactstrap";
import { HeadingCart } from "./HeadingCard";
import ColorCart from "./ColorHeading";
import { FontWeightCart } from "./FontWeightCart";
import ListingCard from "./ListingTypography";
import DisplayCart from "./DisplayCart";
import InlinetextCart from "./InlinetextCart";
import TextColorCart from "./TextColorCart";
import BlockQuotsCart from "./BlockQuots";

const TypographtContainer = () => {
  return (
    <Container fluid>
      <Row>
        <HeadingCart />
        <ColorCart />
        <FontWeightCart />
        <ListingCard />
        <DisplayCart />
        <InlinetextCart />
        <TextColorCart />
        <BlockQuotsCart />
      </Row>
    </Container>
  );
};

export default TypographtContainer;
