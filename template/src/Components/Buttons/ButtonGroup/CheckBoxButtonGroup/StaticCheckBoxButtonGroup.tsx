import { Option1, Option2 } from "@/Constant";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";

export const StaticCheckBoxButtonGroup = () => {
  return (
    <Col xxl="4" md="6" sm="12" className="box-col-6">
        <ButtonGroup className="btn-option">
          <Button color="primary">
            <div className="checkbox checkbox-primary">
              <Input id="check1" type="checkbox" />
              <Label htmlFor="check1">{Option1}</Label>
            </div>
          </Button>
          <Button color="primary">
            <div className="checkbox checkbox-primary">
              <Input id="check2" type="checkbox" />
              <Label htmlFor="check2">{Option2}</Label>
            </div>
          </Button>
        </ButtonGroup>
    </Col>
  );
};
