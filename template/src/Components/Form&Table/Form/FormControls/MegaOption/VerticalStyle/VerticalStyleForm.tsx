import { Badge, Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import { Fragment } from "react";
import { VerticalStyleDataList } from "@/Data/Form&Table/Form";
import { VerticalStyleFormProp } from "@/Types/FormType";

const VerticalStyleForm = () => {
  return (
    <Form className="mega-vertical">
      <Row>
        {VerticalStyleDataList.map(({ megaTitle, child }, index) => (
          <Fragment key={index}>
            <Col sm="12">
              <p className="mega-title m-b-5">{megaTitle}</p>
            </Col>
            {child.map(({ id, color, cardClass, name, badgeTitle, mediaBodyClass, digits, spanText, check, spanClass, star }: VerticalStyleFormProp) => (
              <Col sm="6" key={id}>
                <Card className={cardClass}>
                  <div className="d-flex p-20">
                    <FormGroup className={`radio radio-${color} m-0 w-100`} check>
                      <Input id={`radios${id}`} type="radio" name={name} value="option1" defaultChecked={check} />
                      <Label className="mb-0 w-100" htmlFor={`radios${id}`} check>
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

export default VerticalStyleForm;
