import { Col, Row } from "reactstrap";
import FaqFeaturesTutorial from "./FaqFeaturesTutorial";
import { FeaturedTutorials } from "@/Constant";

const FAQFeaturesTutorial = () => {
  return (
    <Col lg="12" className="featured-tutorial">
      <div className="header-faq">
        <h5 className="mb-0">{FeaturedTutorials}</h5>
      </div>
      <Row>
        <FaqFeaturesTutorial />
      </Row>
    </Col>
  );
};
export default FAQFeaturesTutorial;
