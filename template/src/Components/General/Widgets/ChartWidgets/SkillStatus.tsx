import { Card, CardBody, Col } from "reactstrap";
import { SkillStatusHeading } from "@/Constant";
import ReactApexChart from "react-apexcharts";
import { SkillChart } from "@/Data/General/Widgets/Chart";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const SkillStatus = () => {
  return (
    <Col xl="6" lg="12" className="box-col-6 xl-50">
      <Card>
      <CommonCardHeader title={SkillStatusHeading}/>
        <CardBody>
          <div className="chart-container skill-chart">
            <ReactApexChart id="circlechart" options={SkillChart} series={SkillChart.series} type="radialBar"height={350}/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SkillStatus;
