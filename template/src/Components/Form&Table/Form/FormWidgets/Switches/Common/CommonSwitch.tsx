import { CommonSwitchProp } from "@/Types/FormType";
import { Input, Label } from "reactstrap";

const CommonSwitch :React.FC<CommonSwitchProp>= ({ defaultChecked, color,disabled }) => {
  return (
    <Label className="form-switch form-check-inline" check>
      <Input className={`switch-${color} check-size`} type="checkbox" role="switch" defaultChecked={defaultChecked} disabled={disabled}/>
    </Label>
  );
};

export default CommonSwitch;
