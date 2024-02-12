import { Col, Container, Row } from "reactstrap";
import { CartEmpty, ExploreShortlistItems } from "@/Constant";

const EmptyCart = () => {
  return (
      <section className="cart-section section-b-space p-5">
        <Container fluid>
          <Row>
            <Col sm="12">
              <div>
                <Col sm="12" className="empty-cart-cls text-center">
                  <h3>
                    <strong>{CartEmpty}</strong>
                  </h3>
                  <h5>{ExploreShortlistItems}</h5>
                </Col>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
  );
};
export default EmptyCart;
