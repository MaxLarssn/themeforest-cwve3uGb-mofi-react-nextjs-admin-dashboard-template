import { ArticalAndVideoOne } from "@/Data/Miscellaneous/Knowledgebase";
import { Card, CardBody, Col, Row } from "reactstrap";

export const ArticalAndVideo1 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {ArticalAndVideoOne.map((item, index) => (
          <Col sm="12" key={index}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  {item.iconClass}
                  <div className="flex-grow-1">
                    <h5 className="f-w-600">{item.title}</h5>
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
