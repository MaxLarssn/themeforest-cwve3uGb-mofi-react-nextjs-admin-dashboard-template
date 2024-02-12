import { InlineStyeDataList } from "@/Data/Form&Table/Form";
import { Badge, Card, Col, Form, FormGroup, Input, Label,  Row } from "reactstrap";

const InlineStyleForm = () => {
  return (
    <Form className="mega-inline">
      <Row>
        {InlineStyeDataList.map(({id,color,badgeTitle,digits,shipingText},index) => (
          <Col sm="6" key={index}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className={`radio radio-${color} m-0 w-100`} check>
                  <Input id={`radio=${id}`} type="radio" name="radio1" value="option1" />
                  <Label className="mb-0 w-100" htmlFor={`radio=${id}`} check>
                    <span className="flex-grow-1">
                      <span className="mt-0 mega-title-badge">
                        {badgeTitle}
                        <Badge color={color} className="pull-right digits">{digits}</Badge>
                      </span>
                      <span>{shipingText}</span>
                    </span>
                  </Label>
                </FormGroup>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </Form>
  );
};

export default InlineStyleForm;
