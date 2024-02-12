import { BorderWidth } from "@/Constant";
import { BorderWidthData } from "@/Data/Uikits/helperclass";
import { Col } from "reactstrap";

export const BorderWidths = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper h-100 alert-light-light dark-helper">
        <h5 className="f-w-600 mb-3">{BorderWidth}</h5>
        <div className="d-flex align-items-center mb-2 gap-2">
            <div className="helper-box border-1 border"> </div>
            <span>.border-1</span>
          </div>
        {BorderWidthData.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box ${item} border`}> </div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};
