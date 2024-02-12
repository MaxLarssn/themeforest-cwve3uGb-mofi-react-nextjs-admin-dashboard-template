import { ImagePath, SalesStatistics } from "@/Constant";
import { SalesChartData, SalesData } from "@/Data/General/Dashboard/DefaultDashboard";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col, Row } from "reactstrap";
import { CommonDropdown } from "../common/CommonDropdown";
import DashboardCommonHeader from "../common/DashboardCommonHeader";

const SalesStatistic = () => {
  return (
    <Col xxl="7" xl="12" className="box-col-12 proorder-xl-8 proorder-md-9">
      <Card>
        <DashboardCommonHeader title={SalesStatistics} />
        <CardBody className="sale-statistic">
          <Row>
            {SalesData.map((data, i) => (
              <Col xs="3" className="statistic-icon" key={i}>
                <div className="light-card balance-card widget-hover">
                  <div className="icon-box">
                    <img src={`${ImagePath}/dashboard/icon/${data.img}`} alt="icons" />
                  </div>
                  <div>
                    <span className="f-w-500 f-light">{data.title}</span>
                    <h5 className="mt-1 mb-0">{data.count}</h5>
                  </div>
                  <div className="ms-auto text-end">
                    <CommonDropdown days={true}/>
                    <span className={`f-w-600 font-${data.color}`}>{data.result}</span>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
          <ReactApexChart id="chart-dash-2-line" options={SalesChartData} series={SalesChartData.series} height={270} type='line' />
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesStatistic;
