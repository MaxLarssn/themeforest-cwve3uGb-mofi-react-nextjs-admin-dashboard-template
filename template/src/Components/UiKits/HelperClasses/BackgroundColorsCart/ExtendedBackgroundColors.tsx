import { ExtendedBackgroundColor } from "@/Constant";
import { Col } from "reactstrap";

export const ExtendedBackgroundColors = () => {
  return (
    <Col xl="4" sm="12">
      <div className="border-wrapper h-100 border">
        <h5 className="f-w-600 mb-3">{ExtendedBackgroundColor}</h5>
        <div className="d-flex align-items-center mb-2 gap-2">
          <div className="helper-box light-card"> </div>.light-card
        </div>
          <div className="d-flex align-items-center mb-2 gap-2">
            <div className="helper-box light-background border"> </div>.light-background
          </div>
      </div>
    </Col>
  );
};
