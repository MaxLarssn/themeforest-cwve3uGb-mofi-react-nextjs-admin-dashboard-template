import { ImagePath, StarColor } from "@/Constant";
import { FeaturesData } from "@/Data/Miscellaneous/Faq";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, CardFooter, Col } from "reactstrap";
import FaqProductHover from "./FaqProductHover";

const FaqFeaturesTutorial = () => {
  return (
    <>
      {FeaturesData.map((item, id) => (
        <Col xxl="3" md="6" className="box-col-3" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <img alt="feature" className="img-fluid" src={`${ImagePath}/${item.img}`} />
              <FaqProductHover />
            </div>
            <CardBody>
              <h4 className="mb-1">{item.title}</h4>
              <p>{item.short_description}</p>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <span>{item.date}</span>
              <Rating fillColor={StarColor} initialValue={Math.random() * 5} size={14} />
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default FaqFeaturesTutorial;
