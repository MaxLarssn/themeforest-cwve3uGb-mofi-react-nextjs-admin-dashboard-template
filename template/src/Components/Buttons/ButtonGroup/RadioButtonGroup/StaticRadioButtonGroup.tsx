import { Option1, Option2 } from "@/Constant";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";

export const StaticRadioButtonGroup = () => {
  return (
    <Col xxl="4" md="6" sm="12">
      <div className="btn-radio">
        <ButtonGroup>
          <Button color="primary">
            <div className="radio radio-primary">
              <Input id="radio1" type="radio" name="radio-1" />
              <Label htmlFor="radio1">{Option1}</Label>
            </div>
          </Button>
          <Button color="primary" active>
            <div className="radio radio-primary">
              <Input id="radio2" type="radio" name="radio-1" />
              <Label htmlFor="radio2">{Option2}</Label>
            </div>
          </Button>
        </ButtonGroup>
      </div>
    </Col>
  );
};
