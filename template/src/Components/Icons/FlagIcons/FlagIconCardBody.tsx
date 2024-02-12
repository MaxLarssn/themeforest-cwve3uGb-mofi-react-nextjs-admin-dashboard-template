import { FlagIconData } from "@/Data/Icons";
import { FlagIconType } from "@/Types/IconType";
import { CardBody, Col, Row } from "reactstrap";

export const FlagIconCardBody:React.FC<FlagIconType> = ({ getITag }) => {
  return (
    <CardBody>
      <Row className="icon-lists flag-icons">
        {FlagIconData.map((icon, index) => (
          <Col sm="6" xl="4" xs="12" key={index} onClick={() => getITag(icon.abbrivation)}>
            <div className="d-flex">
              <i className={`flag-icon flag-icon-${icon.abbrivation}`}></i>
              <div className="flex-grow-1">
                <h5 className="text-uppercase">{icon.abbrivation}</h5>
                <h6 className="mt-0">{icon.name}</h6>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};
