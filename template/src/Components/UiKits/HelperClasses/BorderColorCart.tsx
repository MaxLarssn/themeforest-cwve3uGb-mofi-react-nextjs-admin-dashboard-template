import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderColor } from "@/Constant";
import { BorderColorDatas, BorderColorDetail } from "@/Data/Uikits/helperclass";
import { Card, CardBody, Col } from "reactstrap";

const BorderColorCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={BorderColor} span={BorderColorDetail} headClass="card-no-border pb-0" />
        <CardBody>
          <div className="gradient-border">
            <div className="d-flex align-items-center mb-2 gap-2">
              <div className="helper-box b-primary border fill-wrapper"> </div>.b-primary
            </div>
            {BorderColorDatas.map((item, index) => (
              <div className="d-flex align-items-center mb-2 gap-2" key={index}>
                <div className={`helper-box ${item} border fill-wrapper`}> </div>.{item}
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BorderColorCart;