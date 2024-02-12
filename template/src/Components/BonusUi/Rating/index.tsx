import { Container, Row } from "reactstrap";
import SimpleRatingBar from "./SimpleRatingBar";
import MovingRating from "./MovingRating";
import SquareRating from "./SquareRating";
import PillRating from "./PillRating";
import ReverseRating from "./ReverseRating";
import StarRating from "./StarRating";
import ThumbUpDown from "./ThumbUpDown";
import HeartRating from "./HeartRating";
import HalfStarRating from "./HalfStarRating";

const RatingContainer = () => {
  return (
    <Container fluid>
      <Row>
        <SimpleRatingBar />
        <MovingRating />
        <SquareRating />
        <PillRating />
        <ReverseRating />
        <StarRating />
        <HalfStarRating />
        <ThumbUpDown />
        <HeartRating/>
      </Row>
    </Container>
  );
};

export default RatingContainer;
