import { ImagePath } from "@/Constant";
import { CommonProductSlideProp } from "@/Types/EcommerceType";
import { Col, Row } from "reactstrap";

const CommonProductSlide :React.FC<CommonProductSlideProp> = ({ data }) => {
  const stars = [1, 2, 3, 4, 5];
  return (
    <Row className={`product-box align-items-center my-3 ${data.rowClass ? data.rowClass : ""}`}>
      <Col md="5" className="product-img">
        <img className="img-fluid img-100 rounded-3" src={`${ImagePath}/ecommerce/${data.image}`} alt="" />
      </Col>
      <Col md="7" className="product-details text-start p-0 py-3">
        <span>
          {stars.map((item, index) => (
            <i className="fa fa-star font-warning me-1" key={index}></i>
          ))}
        </span>
        <p className="mb-0">{data.title}</p>
        <div className="product-price">{data.text}</div>
      </Col>
    </Row>
  );
};

export default CommonProductSlide;
