import { ArticalDataThird } from "@/Data/Miscellaneous/Faq";
import { Card, CardBody, Col, Row } from "reactstrap";

const ArticeVideo3 = () => {
  return (
    <Col xl="4">
      <Row>
        {ArticalDataThird.map((item, i) => (
          <Col xl="12" md="6" key={i}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  {item.iconClass}
                  <div className="flex-grow-1">
                    <h5 className="pb-2 f-w-600">{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default ArticeVideo3;
