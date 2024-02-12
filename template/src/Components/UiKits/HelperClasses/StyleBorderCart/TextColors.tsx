import { TextColors } from "@/Constant";
import { TextColorDatas } from "@/Data/Uikits/helperclass";
import { Col } from "reactstrap";

export const TextColor = () => {
  return (
    <Col xxl="3" sm="6">
      <div className="border-wrapper alert-light-light h-100 dark-helper">
        <h5 className="f-w-600 mb-3">{TextColors}</h5>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box helper-text border txt-primary">C </div>
          <span>.txt-primary</span>
        </div>
        {TextColorDatas.map((item, index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box helper-text border ${item} ${item === "txt-light" ? "bg-dark" : ""}`}>C </div>
            <span>.{item}</span>
          </div>
        ))}
      </div>
    </Col>
  );
};
