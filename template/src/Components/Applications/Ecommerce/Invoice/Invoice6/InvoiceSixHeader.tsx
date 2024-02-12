import { Col, Row } from "reactstrap";
import { ImagePath, Invoice, Mofi } from "@/Constant";
import Image from "next/image";

const InvoiceSixHeader = () => {
  return (
    <div>
      <Row>
        <Col sm="6">
          <div className="d-flex">
            <div className="media-left">
              <img className="media-object img-60 for-light" src={`${ImagePath}/other-images/logo-login.png`} alt="logo" />
              <img className="media-object img-60 for-dark" src={`${ImagePath}/other-images/logo-light.png`} alt="logo" />
            </div>
            <div className="flex-grow-1 m-l-20 text-right">
              <h4 className="media-heading">{Mofi} </h4>
              <p>hello@Mofi.in<br /><span>289-335-6503</span></p>
            </div>
          </div>
        </Col>
        <Col sm="6">
          <div className="text-md-end text-xs-center">
            <h3>
              {Invoice} #<span className="counter">1069</span>
            </h3>
            <p>Issued: May<span> 27, 2023</span><br /> Payment Due: June <span>27, 2023</span></p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default InvoiceSixHeader;
