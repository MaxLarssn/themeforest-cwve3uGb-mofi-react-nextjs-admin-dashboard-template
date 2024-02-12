import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { Href, Purchase, SimplePricingCards } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SimplePricingData } from "@/Data/Application/Ecommerce";

const SimplePricingCard = () => {
  return (
    <Card>
      <CommonCardHeader title={SimplePricingCards} />
      <CardBody>
        <Row className="g-sm-4 g-3">
          {SimplePricingData.map((item, index) => (
            <Col lg="3" sm="6" className="box-col-3" key={index}>
              <Card className="text-center pricing-simple">
                <CardBody>
                  <h4>{item.title}</h4>
                  <h5>${item.price}</h5>
                  <h6 className="mb-0">{item.plan}</h6>
                </CardBody>
                <div>
                  <Button block tag="a" color="primary" size="lg" href={Href}>{Purchase}</Button>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default SimplePricingCard;
