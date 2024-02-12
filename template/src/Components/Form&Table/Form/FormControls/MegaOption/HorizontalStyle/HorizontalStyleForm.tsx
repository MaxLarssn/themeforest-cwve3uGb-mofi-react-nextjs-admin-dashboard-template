import { HorizontalStyleDataList } from "@/Data/Form&Table/Form";
import { HorizontalStyleFormProp } from "@/Types/FormType";
import { Fragment } from "react";
import { Badge, Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const HorizontalStyleForm = () => {
  return (
    <Form className="mega-horizontal">
      <Row>
        {HorizontalStyleDataList.map(({ megaTitle, child }, index) => (
          <Fragment key={index}>
            <Col sm="3">
              <p className="mega-title">{megaTitle}</p>
            </Col>
            {child.map(({ id, color, name, mediaBodyClass, badgeTitle, digits, spanText, colClass, check, spanClass, star, cardClass }: HorizontalStyleFormProp) => (
              <Col sm="9" key={id} className={colClass}>
                <Card className={cardClass}>
                  <div className="d-flex p-20">
                    <FormGroup className={`radio radio-${color} m-0 w-100`} check>
                      <Input id={`radioh-${id}`} type="radio" name={name} value="option1" defaultChecked={check} />
                      <Label className="mb-0 w-100" htmlFor={`radioh-${id}`} check>
                        <span className={`flex-grow-1 ${mediaBodyClass}`}>
                          <span className="mt-0 mega-title-badge">
                            {badgeTitle}
                            <Badge color={color} className="pull-right digits">{digits}</Badge>
                          </span>
                          <span className={spanClass}>
                            {star && star.map(({ id, starClass }) => <i key={id} className={`icofont icofont-star ${starClass}`}></i>)}
                            {spanText}
                          </span>
                        </span>
                      </Label>
                    </FormGroup>
                  </div>
                </Card>
              </Col>
            ))}
          </Fragment>
        ))}
      </Row>
    </Form>
  );
};

export default HorizontalStyleForm;
