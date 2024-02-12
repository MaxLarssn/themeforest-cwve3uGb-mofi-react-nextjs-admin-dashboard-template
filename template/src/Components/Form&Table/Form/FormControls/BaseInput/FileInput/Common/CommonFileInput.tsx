import { CommonFileInputProp } from "@/Types/FormType";
import { FormGroup, Input, Label } from "reactstrap";

const CommonFileInput: React.FC<CommonFileInputProp> = ({ label, multiple, disabled, size }) => {
  return (
    <FormGroup>
      <Label check>{label}</Label>
      <Input type="file" multiple={multiple} disabled={disabled} bsSize={size} />
    </FormGroup>
  );
};

export default CommonFileInput;
