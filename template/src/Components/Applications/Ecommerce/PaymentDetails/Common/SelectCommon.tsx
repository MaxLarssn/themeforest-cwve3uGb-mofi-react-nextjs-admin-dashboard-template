import { SelectCommonProp } from "@/Types/EcommerceType";
import { FormGroup, Input } from "reactstrap";


const SelectCommon :React.FC<SelectCommonProp> = ({ data,size ,selectClass}) => {
  return (
    <FormGroup className={selectClass}>
      <Input type="select" size={size}>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </Input>
    </FormGroup>
  );
};

export default SelectCommon;
