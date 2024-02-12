import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useState } from "react";
import Slider from "react-slick";
import { Card, CardBody, Col } from "reactstrap";

const ImageSlider = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const [nav1, setNav1] = useState<Slider | null>();
  const [nav2, setNav2] = useState<Slider | null>();

  return (
    <Col xxl="4" md="6" className="box-col-6">
      <Card>
        <CardBody className="p-2 ecommerce-slider">
          <Slider autoplay speed={3000} arrows={false} asNavFor={nav2!} ref={(slider1) => setNav1(slider1)}>
            {productItem ? productItem.map((item) => item.variants.map((items, id) => <img src={`${ImagePath}/ecommerce/${items.images}`} alt="" className="rounded-4 p-2" key={id} />)) : "No product Found"}
          </Slider>
          <Slider arrows={false} asNavFor={nav1!} ref={(slider2) => setNav2(slider2)} slidesToShow={4} swipeToSlide={true} focusOnSelect={true}>
            {productItem &&
              productItem.map((item) => {
                return item.variants.map((items, id) => <img src={`${ImagePath}/ecommerce/${items.images}`} alt="img" className="img-fluid rounded-4 p-2" key={id} />);
              })}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ImageSlider;
