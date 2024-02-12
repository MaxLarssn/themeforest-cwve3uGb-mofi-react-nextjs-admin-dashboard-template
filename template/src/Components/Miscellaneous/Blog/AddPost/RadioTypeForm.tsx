import { FormGroup, Input, Label } from "reactstrap";
import { PostType } from "@/Constant";
import { RadioData } from "@/Data/Miscellaneous/Blog";

const RadioTypeForm = () => {
 
  return (
    <FormGroup>
      <Label className="mb-2" check>{PostType}:</Label>
      <div className="m-checkbox-inline">
        {RadioData.map((data, index) => (
          <Label htmlFor={`edo-ani-${index}`} key={index} check>
            <Input
              className="radio_animated"
              id={`edo-ani-${index}`}
              type="radio"
              name="rdo-ani"
              defaultChecked={data.defaultChecked}
            />
            {data.text}
          </Label>
        ))}
      </div>
    </FormGroup>
  );
};

export default RadioTypeForm;
