import { Card, CardBody, Col, Row } from "reactstrap";
import { UnorderLists } from "./UnorderLists";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ListingTypography } from "@/Constant";
import { ListingData } from "@/Data/Uikits/typography";
import { Orderlist } from "./OrderList";
import { DescriptionList } from "./OrderListSecond";

const ListingCard = () => {
  return (
    <Col sm="12" className="listing">
      <Card>
        <CommonCardHeader title={ListingTypography} span={ListingData} />
        <CardBody>
          <Row className="g-3">
            <UnorderLists />
            <Orderlist />
            <DescriptionList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListingCard;
