import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OrdersStatus } from "@/Constant";
import { OrderStatusChart } from "@/Data/General/Widgets/Chart";
import ReactApexChart from "react-apexcharts";
import { Card, CardBody, Col } from "reactstrap";

const OrderStatusWidgets = () => {
  return (
    <Col xl="7" lg="12" className="box-col-7">
      <Card>
        <CommonCardHeader title={OrdersStatus} />
        <CardBody>
          <div className="chart-container">
            <ReactApexChart id="linechart" options={OrderStatusChart} series={OrderStatusChart.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderStatusWidgets;
