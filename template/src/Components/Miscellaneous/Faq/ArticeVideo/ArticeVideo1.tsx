import { ArticleDataOne } from "@/Data/Miscellaneous/Faq";
import { Card, CardBody, Col, Row } from "reactstrap";

export const ArticeVideo1 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {ArticleDataOne.map((item, i) => (
          <Col sm="12" key={i}>
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
