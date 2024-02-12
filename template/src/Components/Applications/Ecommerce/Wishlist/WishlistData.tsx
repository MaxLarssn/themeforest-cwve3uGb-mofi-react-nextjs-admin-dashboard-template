import { Href, ImagePath } from "@/Constant";
import { WhishListProduct } from "@/Data/Application/Ecommerce";
import { Rating } from "react-simple-star-rating";
import { Button, Col, Row } from "reactstrap";

export const WishlistData = () => {

  return (
    <Row className="g-sm-4 g-3">
      {WhishListProduct.map((item, index) => (
        <Col xl="4" md="6" key={index}>
          <div className="prooduct-details-box">
            <div className="d-flex">
              <img className="align-self-center img-fluid img-60" src={`${ImagePath}/ecommerce/${item.image}`} alt="#" />
              <div className="flex-grow-1 ms-3">
                <div className="product-name">
                  <h6><a href={Href}>{item.name}</a></h6>
                </div>
                <Rating initialValue={5} size={17} />
                <div className="price d-flex border-0 p-0">
                  <div className="text-muted me-2">Price</div> : 210$</div>
                <div className="avaiabilty">
                  <div className="text-success">InStock</div>
                </div>
                <div>
                <Button tag="a" href={Href} color="primary" size="xs">{`MoveToCarts`}</Button>
                </div>
              </div>
            </div>
          </div>
        </Col>
       ))} 
    </Row>
  );
};
