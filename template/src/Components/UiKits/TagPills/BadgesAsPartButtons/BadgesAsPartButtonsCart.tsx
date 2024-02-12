import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BadgesAsPartButtons, Messages } from "@/Constant";
import { Mail } from "react-feather";
import { Badge, Button, Card, CardBody, Col } from "reactstrap";
import { DynamicBadgesAsPartButtons } from "./DynamicBadgesAsPartButtons";
import { BadegButtonData } from "@/Data/Uikits/tag-pills";

const BadgesAsPartButtonsCart = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={BadgesAsPartButtons} span={BadegButtonData} />
        <CardBody>
          <div className="badge-spacing flex-column align-items-start">
            <Button color="primary" className="d-flex align-items-center">{Messages}
            <Badge color="light" className="rounded-circle btn-p-space text-dark ms-2"><Mail /></Badge>
            </Button>
            <DynamicBadgesAsPartButtons />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BadgesAsPartButtonsCart;
