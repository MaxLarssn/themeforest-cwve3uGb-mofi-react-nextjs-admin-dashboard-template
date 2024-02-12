import { Container, Row } from "reactstrap";
import BadgesContextualVariationsCart from "./BadgesContextualVariationsCart";
import PillsContextualVariationsCart from "./PillsContextualVariationsCart";
import NumberofBadgeCard from "./NumberofBadgeCard";
import NumberOfPillsTagCart from "./NumberOfPillsTagCart";
import BadgeTagsWithIconsCart from "./BadgeTagsWithIconsCart";
import RoundedPillsWithIconsCart from "./RoundedPillsWithIconsCart";
import BadgeHeadingsExampleCart from "./BadgeHeadingsExampleCart";
import BadgesAsPartButtonsCart from "./BadgesAsPartButtons/BadgesAsPartButtonsCart";

const TagAndPillsContainer = () => {
  return (
    <Container fluid>
      <Row>
        <BadgesContextualVariationsCart />
        <PillsContextualVariationsCart />
        <NumberofBadgeCard />
        <NumberOfPillsTagCart />
        <BadgeTagsWithIconsCart />
        <RoundedPillsWithIconsCart />
        <BadgeHeadingsExampleCart />
        <BadgesAsPartButtonsCart />
      </Row>
    </Container>
  );
};

export default TagAndPillsContainer;
