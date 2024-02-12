import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Grouping } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { GroupingFirst } from "./GroupingFirst";
import { GroupingSecond } from "./GroupingSecond";
import { GroupingThird } from "./GroupingThird";
import { GroupingData } from "@/Data/Uikits/avatars";

const GroupingCart = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={Grouping} span={GroupingData} />
        <CardBody>
          <div className="avatar-showcase">
            <div className="avatars">
              <GroupingFirst />
              <GroupingSecond />
              <GroupingThird />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupingCart;
