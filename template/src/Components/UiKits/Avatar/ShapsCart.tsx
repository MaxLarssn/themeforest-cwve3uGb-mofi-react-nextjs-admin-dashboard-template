import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, Shapes } from "@/Constant";
import { Shaps, ShapsData } from "@/Data/Uikits/avatars";
import { Card, CardBody, Col } from "reactstrap";

const ShapsCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={Shapes} span={ShapsData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <img className="img-100 b-r-8" src={`${ImagePath}/avtar/4.jpg`} alt="image" />
            </div>
            {Shaps.map(({ className, src }, index) => (
              <div className="avatar" key={index}>
                <img className={`${className} b-r-30`} src={`${ImagePath}${src}`} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ShapsCart;
