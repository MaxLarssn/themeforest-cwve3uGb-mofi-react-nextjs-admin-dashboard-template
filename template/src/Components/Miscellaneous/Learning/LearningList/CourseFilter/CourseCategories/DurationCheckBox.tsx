import { Label, Input } from "reactstrap";
import { DurationLearning } from "@/Constant";
import { DurationData } from "@/Data/Miscellaneous/Learning";

const DurationCheckBox = () => {
  return (
    <div className="checkbox-animated">
      <div className="learning-header">
        <span className="f-w-700">{DurationLearning}</span>
      </div>
      {DurationData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`Duration-${index}`} check>
          <Input className="checkbox_animated" id={`Duration-${index}`} type="checkbox" />{data}
          </Label>
      ))}
    </div>
  );
};

export default DurationCheckBox;
