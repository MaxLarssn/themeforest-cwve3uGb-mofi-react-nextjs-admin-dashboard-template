import { Card, CardBody, Col } from "reactstrap";
import { Illustrations, StudyStatistic, UXDesign } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { StudyStatisticChart } from "@/Data/General/Dashboard/Education";

const StudyStatistics = () => {
  return (
    <Col xl="6" md="6" className="proorder-md-2">
      <Card>
        <DashboardCommonHeader title={StudyStatistic} />
        <CardBody>
          <div className="studay-statistics">
            <ul className="d-flex align-item-center gap-2 simple-list flex-row">
              <li>
                <span className="bg-primary"> </span>{UXDesign}
              </li>
              <li>
                <span className="bg-secondary"> </span>{Illustrations}
              </li>
            </ul>
          </div>
          <ReactApexChart id="study-statistics" options={StudyStatisticChart} series={StudyStatisticChart.series} type="area" height={230} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default StudyStatistics;
