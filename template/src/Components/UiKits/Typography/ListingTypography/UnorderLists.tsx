import { UnorderList } from "@/Constant";
import { UnorderData } from "@/Data/Uikits/typography";
import { Col } from "reactstrap";

export const UnorderLists = () => {
  return (
    <Col md="6" xxl="4">
      <div className="card-wrapper border rounded-3">
        <h6 className="sub-title fw-bold">{UnorderList}</h6>
        <ul className="mb-3">
          <li>One who looks on the bright side of things</li>
          {UnorderData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </Col>
  );
};
