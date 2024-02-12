import { Container, Row } from "reactstrap";
import AllCards from "../../SocialApp/UserContext/AllCards";

const UserCardsContainer = () => {
  return (
    <Container fluid>
      <Row className="user-cards-items">
        <AllCards />
      </Row>
    </Container>
  );
};

export default UserCardsContainer;
