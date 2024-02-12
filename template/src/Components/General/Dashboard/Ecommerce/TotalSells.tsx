import { ImagePath } from "@/Constant";
import { TopSellData } from "@/Data/General/Dashboard/Ecommerce";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";

const TotalSells = () => {
  return (
    <>
      {TopSellData.map((data, i) => (
        <Col xl="3" sm="6" key={i} className="daily-revenue-card">
          <Card>
            <DashboardCommonHeader title={data.title} />
            <CardBody className={`pb-0 ${data.class}`}>
              <div className="d-flex align-items-center gap-3">
                <div className="flex-shrink-0">
                  <img src={`${ImagePath}/dashboard-3/icon/${data.image}`} alt="icon" />
                </div>
                <div className="flex-grow-1">
                  <div className="d-flex align-items-center gap-2">
                    <h2>{data.count}</h2>
                    <div className="d-flex total-icon">
                      <p className={`mb-0 up-arrow bg-light-${data.color}`}>
                        <i className={`fa ${data.icon} text-${data.color}`} />
                      </p>
                      <span className={`f-w-500 font-${data.color}`}>{data.percentage}</span>
                    </div>
                  </div>
                  <p className="text-truncate">{data.detail}</p>
                </div>
              </div>
              <ReactApexChart id={data.chartId} options={data.chart} series={data.chart.series} type="area" height={90} />
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default TotalSells;
