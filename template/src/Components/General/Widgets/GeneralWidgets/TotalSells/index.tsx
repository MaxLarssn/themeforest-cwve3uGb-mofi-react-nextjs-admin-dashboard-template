import DashboardCommonHeader from "@/Components/General/Dashboard/common/DashboardCommonHeader";
import { ImagePath } from "@/Constant";
import { TopSellData } from "@/Data/General/Widgets/General";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";
import TotalSellsDetails from "./TotalSellsDetails";

const TotalSells = () => {
  return (
    <>
      {TopSellData.map((data, index) => (
        <Col xl="3" sm="6" key={index}>
          <Card>
           <DashboardCommonHeader title={data.title} tagClass="widget" />
            <CardBody className={`pb-0 ${data.class}`}>
              <div className="d-flex align-items-center gap-3">
                <div className="flex-shrink-0">
                  <img src={`${ImagePath}/dashboard-3/icon/${data.image}`} alt="icon"/>
                </div>
                <TotalSellsDetails data={data}/>
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
