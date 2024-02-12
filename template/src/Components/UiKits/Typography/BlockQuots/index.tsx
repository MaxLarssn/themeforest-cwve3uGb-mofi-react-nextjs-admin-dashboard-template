import { Card, CardBody, Col } from "reactstrap";
import { StaticBlockQuotes } from "./StaticBlockQuotes";
import { DynamicBlockquotes } from "./DynamicBlockquotes";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Blockquotes } from "@/Constant";
import { BlockquotesData } from "@/Data/Uikits/typography";

const BlockQuotsCart = () => {
  return (
    <Col sm="12">
      <Card className="overflow-hidden">
        <CommonCardHeader title={Blockquotes} span={BlockquotesData} />
        <CardBody>
          <StaticBlockQuotes />
          <DynamicBlockquotes />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuotsCart;
