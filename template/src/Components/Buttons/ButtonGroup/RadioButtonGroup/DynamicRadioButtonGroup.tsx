import { Option1, Option2 } from "@/Constant";
import { RadiobuttonDataList } from "@/Data/Buttons/ButtonGroup";
import { ButtonGroupProp } from "@/Types/ButtonType";
import { Button, ButtonGroup, Col, Input, Label } from "reactstrap";

export const DynamicRadioButtonGroup = () => {
  return (
    <>
      {RadiobuttonDataList.map(({ idOne, color, idTwo, name }: ButtonGroupProp, index) => (
        <Col xxl="4" md="6" sm="12" key={index}>
          <div className="btn-radio">
            <ButtonGroup>
              <Button color={color}>
                <div className={`radio radio-${color}`}>
                  <Input id={`radio${idOne}`} type="radio" name={name} />
                  <Label htmlFor={`radio${idOne}`}>{Option1}</Label>
                </div>
              </Button>
              <Button color={color}>
                <div className={`radio radio-${color}`}>
                  <Input id={`radio${idTwo}`} type="radio" name={name} />
                  <Label htmlFor={`radio${idTwo}`}>{Option2}</Label>
                </div>
              </Button>
            </ButtonGroup>
          </div>
        </Col>
      ))}
    </>
  );
};
