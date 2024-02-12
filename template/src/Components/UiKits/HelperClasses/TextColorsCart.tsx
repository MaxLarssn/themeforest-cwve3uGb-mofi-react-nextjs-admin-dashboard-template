import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TextColors } from "@/Constant";
import { TextColorDetail, TextDataColors } from "@/Data/Uikits/helperclass";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";

const TextColorsCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={TextColors} span={TextColorDetail} headClass="card-no-border pb-0" />
        <CardBody>
          <div className="helper-common-box"></div>
          <div className="d-flex align-items-center gap-2">
            <div className="font-primary">This is a <strong>font-primary</strong> text used class as .font-primary</div>
          </div>
          {TextDataColors.map((item, index) => (
            <Fragment key={index}>
              <div className="helper-common-box"></div>
              <div className="d-flex align-items-center gap-2" key={index}>
                <div className={item}>This is a <strong>{item}</strong> text used class as .{item}</div>
              </div>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default TextColorsCart;
