import { Col } from "reactstrap";

export const StaticLeftRibbons = () => {
  return (
    <Col sm="6" xl="4">
      <div className="ribbon-wrapper border border-1 height-equal alert-light-light">
        <div className="ribbon ribbon-primary ribbon-space-bottom">SAVE 10%</div>
        <p className="txt-dark">
          <em className="txt-danger">Ribbon designs</em> have been a part of web design. There is a design for you in this collection, regardless of whether you use <em className="txt-danger">CSS ribbons </em>to identify your items.
        </p>
      </div>
    </Col>
  );
};
