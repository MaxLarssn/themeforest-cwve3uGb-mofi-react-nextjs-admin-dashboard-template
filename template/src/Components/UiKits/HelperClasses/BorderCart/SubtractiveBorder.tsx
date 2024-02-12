import { SubtractiveBorder } from "@/Constant";
import { Subtractivedata } from "@/Data/Uikits/helperclass";
import { Col } from "reactstrap";

export const SubtractiveBorders = () => {
  return (
    <Col xl="4" sm="6">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{SubtractiveBorder}</h5>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box bg-light border border-0"> </div>.border-0
        </div>
        {Subtractivedata.map((item ,index) => (
          <div className="d-flex align-items-center mb-2 gap-2" key={index}>
            <div className={`helper-box bg-light border ${item}`}> </div>.{item}
          </div>
        ))}
      </div>
    </Col>
  );
};
