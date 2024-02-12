import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, StatusIndicator } from "@/Constant";
import { StatusData, StatusIndicators } from "@/Data/Uikits/avatars";
import { Card, CardBody, Col } from "reactstrap";

const StatusIndicatorCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={StatusIndicator} span={StatusData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <img className="img-100 rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="image" />
              <div className="status bg-success"></div>
            </div>
            {StatusIndicators.map(({ className, src ,color}, index) => (
              <div className="avatar" key={index}>
                <img className={`${className} rounded-circle`} src={`${ImagePath}${src}`} alt="image" />
                <div className={`status bg-${color}`}></div>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StatusIndicatorCart;