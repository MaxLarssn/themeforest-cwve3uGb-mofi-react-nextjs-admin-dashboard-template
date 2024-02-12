import { ImagePath } from "@/Constant";
import { SolidBorderStyleDataList } from "@/Data/Form&Table/Form";
import { Card, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const SolidBorderStyleForm = () => {
  return (
    <Form className="mega-inline border-style megaoptions-border-space-sm">
      <Row className="flex-column">
        {SolidBorderStyleDataList.map(({ id, image, spanText },index) => (
          <Col xs="12" key={index}>
            <Card>
              <div className="d-flex p-20">
                <FormGroup className="radio radio-primary" check>
                  <Input id={`radio-${id}`} type="radio" name="radio1" value="option1" />
                  <Label className="my-0" htmlFor={`radio-${id}`} check>
                    <div className="flex-grow-1">
                      <span className="d-flex list-behavior-1">
                        <span className="flex-shrink-0 ms-2">
                          <img className="tab-img b-r-0 img-fluid" src={`${ImagePath}/${image}`} alt="home" />
                        </span>
                        <span className="flex-grow-1">
                          <span className="mb-0">{spanText}</span>
                        </span>
                      </span>
                    </div>
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

export default SolidBorderStyleForm;
