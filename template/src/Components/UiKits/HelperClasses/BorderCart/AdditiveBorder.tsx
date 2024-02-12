import { AdditiveBorder } from "@/Constant";
import { AdditiveData } from "@/Data/Uikits/helperclass";
import { Col } from "reactstrap";

export const AdditiveBorders = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{AdditiveBorder}</h5>
        <div className="helper-common-box">
          <div className="helper-box bg-light border"></div>.border
        </div>
        {AdditiveData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box bg-light ${item}`}></div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};