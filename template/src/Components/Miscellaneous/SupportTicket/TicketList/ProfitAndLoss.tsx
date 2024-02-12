import { Col } from "reactstrap";
import { LossSupportTicket, ProfitSupportTicket } from "@/Constant";

const ProfitAndLoss = () => {
  return (
    <Col xs="7">
      <div className="text-md-end">
        <ul>
          <li className="border-0">{ProfitSupportTicket}
            <span className="product-stts txt-primary ms-2">{8989}
              <i className="icon-angle-up f-12 ms-2 me-0"></i>
            </span>
          </li>
          <li className="border-0">{LossSupportTicket}
            <span className="product-stts txt-danger ms-2">{2560}
              <i className="icon-angle-down f-12 ms-2 me-0"></i>
            </span>
          </li>
        </ul>
      </div>
    </Col>
  );
};

export default ProfitAndLoss;
