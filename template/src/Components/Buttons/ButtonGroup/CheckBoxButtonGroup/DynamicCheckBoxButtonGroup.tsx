import { Option1, Option2 } from "@/Constant";
import { CeckboxButtonDataList } from "@/Data/Buttons/ButtonGroup";
import { ButtonGroupProp } from "@/Types/ButtonType";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";

export const DynamicCheckBoxButtonGroup = () => {
  return (
    <>
      {CeckboxButtonDataList.map(({ idOne, color, idTwo }: ButtonGroupProp, index) => (
        <Col xxl="4" md="6" sm="12" className="box-col-6" key={index}>
            <ButtonGroup className="btn-option">
              <Button color={color}>
                <div className={`checkbox checkbox-${color}`}>
                  <Input id={`checkbox${idOne}`} type="checkbox" />
                  <Label htmlFor={`checkbox${idOne}`}>{Option1}</Label>
                </div>
              </Button>
              <Button color={color}>
                <div className={`checkbox checkbox-${color}`}>
                  <Input id={`checkbox${idTwo}`} type="checkbox" />
                  <Label htmlFor={`checkbox${idTwo}`}>{Option2}</Label>
                </div>
              </Button>
            </ButtonGroup>
        </Col>
      ))}
    </>
  );
};
