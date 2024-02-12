import { LocationCheckBoxData } from "@/Data/Miscellaneous/JobSearch";
import { Input, Label } from "reactstrap";

const LocationCheckBox = () => {
  return (
    <div className="location-checkbox">
      {LocationCheckBoxData.map((data, index) => (
        <Label className="d-block" htmlFor={`checkbox-${index}`} key={index} check>
          <Input className="checkbox_animated" id={`checkbox-${index}`} type="checkbox" />
          {data.location}
          <span className="d-block">{data.locationSpanText}</span>
        </Label>
      ))}
    </div>
  );
};

export default LocationCheckBox;
