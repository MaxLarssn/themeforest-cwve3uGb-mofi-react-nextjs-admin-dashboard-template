import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ImagePath, Sizes } from "@/Constant";
import { SizeData, SizeImages } from "@/Data/Uikits/avatars";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

export const SizesCart = () => {
  return (
    <Col xl="4" md="6">
      <Card className="height-equal">
        <CommonCardHeader title={Sizes} span={SizeData} />
        <CardBody className="avatar-showcase">
          <div className="avatars">
            <div className="avatar">
              <img className="img-100 rounded-circle" src={`${ImagePath}/avtar/3.jpg`} alt="image" />
            </div>
            {SizeImages.map((item, index) => (
              <div className="avatar" key={index}>
                <img className={`${item.className} rounded-circle`} src={`${ImagePath}${item.src}`} alt="image" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
