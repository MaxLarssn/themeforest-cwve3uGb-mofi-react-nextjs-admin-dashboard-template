import { Card, Col } from "reactstrap";
import { ColorHeadingBody } from "./ColorHeadingBody";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ColoredHeadings } from "@/Constant";
import { HeadingData } from "@/Data/Uikits/typography";

const ColorCart = () => {
  return (
    <Col xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={ColoredHeadings} span={HeadingData} />
        <ColorHeadingBody />
      </Card>
    </Col>
  );
};

export default ColorCart;
