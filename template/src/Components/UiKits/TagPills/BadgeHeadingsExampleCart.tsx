import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgeHeadingsExample } from "@/Constant";
import { BadgeExData } from "@/Data/Uikits/tag-pills";
import { Card, CardBody, Col } from "reactstrap";

const BadgeHeadingsExampleCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={BadgeHeadingsExample} span={BadgeExData} />
        <CardBody>
          <h1 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 1<span className="badge badge-primary">Latest</span></h1>
          <h2 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 2<span className="badge badge-secondary">Trending</span></h2>
          <h3 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 3<span className="badge badge-success">Checkout</span></h3>
          <h4 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 4<span className="badge badge-warning">Inbox</span></h4>
          <h5 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 5<span className="badge badge-danger">Login</span></h5>
          <h6 className="pb-2 d-flex gap-2 flex-wrap">Badge Heading 6<span className="badge badge-dark">Logout</span></h6>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgeHeadingsExampleCart;