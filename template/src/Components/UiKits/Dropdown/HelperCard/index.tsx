import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HelperCards } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import { WarningCard } from "./WarningCard";
import { AlertCard } from "./AlertCard";
import { HelperCart } from "./HelperCard";
import { HelperData } from "@/Data/Uikits/dropdown";

const HelperCard = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={HelperCards} span={HelperData} />
        <CardBody className="dropdown-basic m-0">
          <div className="common-flex">
            <HelperCart />
            <WarningCard />
            <AlertCard />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HelperCard;
