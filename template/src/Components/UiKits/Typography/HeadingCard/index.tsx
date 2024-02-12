import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HeadingsBody } from "./HeadingsBody";
import { Card, Col } from "reactstrap";
import { Headings } from "@/Constant";
import { HeadingData } from "@/Data/Uikits/typography";

export const HeadingCart = () => {
  return (
    <Col xxl="6">
      <Card className="height-equal">
        <CommonCardHeader title={Headings} span={HeadingData} />
        <HeadingsBody />
      </Card>
    </Col>
  );
};
