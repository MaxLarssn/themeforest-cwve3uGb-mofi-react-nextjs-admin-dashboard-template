import { WithoutBorderDataList } from "@/Data/Form&Table/Form";
import { Badge, Card, Col, Form, FormGroup, Input, Label,  Row } from "reactstrap";

const WithoutBordersStyleForm = () => {
  return (
    <Form className="mega-inline plain-style">
      <Row>
        {WithoutBorderDataList.map(({ id, color, badgeTitle, digits, plansText, check }) => (
          <Col sm="6" key={id}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className={`checkbox checkbox-${color} m-0`} check>
                  <Input id={`checkbox${id}`} type="checkbox" defaultChecked={check} />
                  <Label htmlFor={`checkbox${id}`} check>
                    <span className="flex-grow-1 megaoption-space">
                      <span className="mt-0 mega-title-badge">
                        {badgeTitle}
                        <Badge color={color} className="pull-right digits">{digits}</Badge>
                      </span>
                      <span> {plansText}</span>
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

export default WithoutBordersStyleForm;
