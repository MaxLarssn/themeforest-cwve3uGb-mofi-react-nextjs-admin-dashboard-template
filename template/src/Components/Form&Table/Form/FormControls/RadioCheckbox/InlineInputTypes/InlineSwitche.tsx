import { Col, Input } from "reactstrap";
import { InlineSwitches } from "@/Constant";
import { InlineSwitchData } from "@/Data/Form&Table/Form";

export const InlineSwitche = () => {
  return (
    <Col md="12" xl="4">
      <div className="card-wrapper border rounded-3 checkbox-checked">
        <h6 className="sub-title">{InlineSwitches}</h6>
        <div className="form-check-size">
          <div className="form-check form-switch form-check-inline">
            <Input className="check-size" id="flexSwitchCheckDefault2" type="checkbox" role="switch" defaultChecked />
          </div>
          {InlineSwitchData.map(({ id, disabled }, index) => (
            <div className="form-check form-switch form-check-inline" key={index}>
              <Input className="check-size" id={id} type="checkbox" role="switch" disabled={disabled} />
            </div>
          ))}
        </div>
      </div>
    </Col>
  );
};
