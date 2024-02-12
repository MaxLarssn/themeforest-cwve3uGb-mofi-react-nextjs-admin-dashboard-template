import { Card, CardBody, Col } from "reactstrap";
import { TodaysTasks } from "@/Constant";
import TodayTasksBody from "./TodayTasksBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const TodayTasks = () => {
  return (
    <Col xl="3" md="6" className="col-xl-40 proorder-md-11">
      <Card>
        <DashboardCommonHeader title={TodaysTasks} />
        <CardBody>
          <ul className="task-box">
            <TodayTasksBody />
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TodayTasks;
