import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { Visitor } from "@/Constant";
import SVG from "@/CommonComponent/SVG";
import { CommonDropdown } from "@/Components/General/Dashboard/common/CommonDropdown";
import ReactApexChart from "react-apexcharts";
import { VisitorChartData } from "@/Data/General/Widgets/General";

const Visitors = () => {
  return (
    <Col xxl="6" xl="4" md="12">
      <Card className="visitor-card">
        <CardHeader className="card-no-border pb-0">
          <div className="header-top">
            <h5 className="f-w-600 m-0">
              {Visitor}
              <span className="f-14 font-primary f-w-500 ms-1">
                <SVG className="svg-fill me-1" iconId="user-visitor" /> (+2.8)
              </span>
            </h5>
            <div className="card-header-right-icon">
              <CommonDropdown days={true} />
            </div>
          </div>
        </CardHeader>
        <CardBody className="pt-3">
          <div className="visitors-container">
            <ReactApexChart id="visitor-chart" options={VisitorChartData} series={VisitorChartData.series} type="bar" height={220} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Visitors;
