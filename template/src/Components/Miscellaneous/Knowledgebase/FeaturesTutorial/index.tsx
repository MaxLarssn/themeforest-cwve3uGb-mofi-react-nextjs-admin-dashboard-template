import { FeaturedTutorial, ImagePath, StarColor } from "@/Constant";
import { FeaturesData } from "@/Data/Miscellaneous/Knowledgebase";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";
import ProductHover from "./ProductHover";

const FeaturesTutorial = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h3 className="mb-0">{FeaturedTutorial}</h3>
      </div>
      <Row>
        {FeaturesData.map((item, id) => (
          <Col xl="3" sm="6" className="xl-50 box-col-3" key={id}>
            <Card className="features-faq product-box">
              <div className="faq-image product-img">
                <div className="knowledgebase-image">
                  <img alt="feature" className="img-fluid" src={`${ImagePath}/${item.img}`} />
                </div>
                <ProductHover />
              </div>
              <CardBody>
                <h5 className="f-w-500">{item.title}</h5>
                <p>{item.short_description}</p>
              </CardBody>
              <CardFooter className="d-flex align-items-center justify-content-between">
                <span>{item.date}</span>
                <Rating fillColor={StarColor} initialValue={Math.random() * 5} size={14} />
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default FeaturesTutorial;
