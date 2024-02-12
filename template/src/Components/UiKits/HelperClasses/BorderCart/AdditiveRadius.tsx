import { AdditiveRadiusTitle } from "@/Constant";
import { RadiusData } from "@/Data/Uikits/helperclass";
import { Col } from "reactstrap";

export const AdditiveRadius = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{AdditiveRadiusTitle}</h5>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-radius radius-wrapper rounded"></div>.rounded
        </div>
        {RadiusData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-radius radius-wrapper ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};
