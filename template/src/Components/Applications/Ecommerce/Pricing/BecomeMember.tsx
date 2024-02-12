import { Button, Card, CardBody, Col, Row } from "reactstrap";
import { BecomeMembers, Href, SignUp } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BecomeMemberData } from "@/Data/Application/Ecommerce";

const BecomeMember = () => {
  return (
    <Card>
      <CommonCardHeader title={BecomeMembers} />
      <CardBody className="pricing-block">
        <Row>
          {BecomeMemberData.map((item, index) => (
            <Col lg="3" sm="6" className="box-col-3" key={index}>
              <div className="pricingtable">
                <div className="pricingtable-header">
                  <h4 className="title">{item.type}</h4>
                </div>
                <div className="price-value">
                  <span className="currency">$</span>
                  <span className="amount">{item.price}</span>
                  <span className="duration">/mo</span>
                </div>
                <ul className="pricing-content">
                  {item.benefit.map((data, index) => (
                    <li key={index}>{data}</li>
                  ))}
                </ul>
                <div className="pricingtable-signup">
                  <Button tag="a" size="lg" color="primary" href={Href}>{SignUp}</Button>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </CardBody>
    </Card>
  );
};

export default BecomeMember;
