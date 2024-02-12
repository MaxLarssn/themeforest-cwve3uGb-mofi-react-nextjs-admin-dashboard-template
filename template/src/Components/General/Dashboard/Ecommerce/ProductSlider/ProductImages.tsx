import { Col, Row } from "reactstrap";
import { Carousel } from "react-responsive-carousel";
import { ImagePath } from "@/Constant";

const ProductImages = () => {
  return (
    <Col sm="6">
      <div className="product-page-main p-0">
        <Carousel className="owl-carousel owl-theme" showStatus={false} showIndicators={false} showArrows={false}>
          <div className="item">
            <img className="img-fluid" src={`${ImagePath}/dashboard-3/slider/4.png`} />
          </div>
          <div className="item">
            <img className="img-fluid" src={`${ImagePath}/dashboard-3/slider/5.png`} />
          </div>
          <div className="item">
            <img className="img-fluid" src={`${ImagePath}/dashboard-3/slider/6.png`} />
          </div>
        </Carousel>
      </div>
    </Col>
  );
};

export default ProductImages;
