import { Card, CardBody, Col } from "reactstrap";
import { UserContinent } from "@/Constant";
import UserByContinentBody from "./UserByContinentBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const UserByContinent = () => {
  return (
    <Col xl="6" lg="7" sm="12">
      <Card className="overflow-hidden">
        <DashboardCommonHeader title={UserContinent} />
        <CardBody className="user-continent pb-0">
          <UserByContinentBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserByContinent;
