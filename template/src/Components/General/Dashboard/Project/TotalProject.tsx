import { Card, CardBody, Col } from "reactstrap";
import { CurrentlyRunning, TotalProjects } from "@/Constant";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import ReactApexChart from "react-apexcharts";
import { TotalProjectChart, TotalProjectData } from "@/Data/General/Dashboard/Project";

const TotalProject = () => {
  return (
    <Col xl="4" md="6" className="col-xl-50 proorder-md-2">
      <Card>
        <DashboardCommonHeader title={TotalProjects} />
        <CardBody className="total-project mt-2">
          <h5 className="f-w-500">
            {CurrentlyRunning}
            <span className="px-2 f-w-500 font-primary">{"28 Projects"}</span>
          </h5>
          <ReactApexChart id="total-project" options={TotalProjectChart} series={TotalProjectChart.series} type="bar" height={240} />
          <ul>
            {TotalProjectData.map((data, i) => (
              <li className="d-flex align-items-center gap-2" key={i}>
                <span className={`bg-${data.color}`} />
                <p>{data.title}</p>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalProject;
