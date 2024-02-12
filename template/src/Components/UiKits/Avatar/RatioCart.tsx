import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, Ratio } from "@/Constant";
import { RatioData, Ratios } from "@/Data/Uikits/avatars";
import { Card, CardBody, Col } from "reactstrap";

const RatioCart = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={Ratio} span={RatioData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar ratio">
              <img className="b-r-8 img-100" src={`${ImagePath}/avtar/11.jpg`} alt="image" />
            </div>
            {Ratios.map(({ className, src}, index) => (
              <div className="avatar ratio" key={index}>
                <img className={`b-r-8 ${className}`} src={`${ImagePath}${src}`} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RatioCart;
