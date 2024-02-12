import { Card, CardBody, Col } from "reactstrap";
import { ChatJSRadarGraph } from "@/Constant";
import { Radar } from "react-chartjs-2";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RadarGraphChartData } from "@/Data/Charts/ChartJS";

const RadarGraph = () => { 
  return (
    <Col xl="6" ms="12" className="box-col-6">
      <Card>
        <CommonCardHeader title={ChatJSRadarGraph} />
        <CardBody className="chart-block">
          <Radar id="myRadarGraph" data={RadarGraphChartData} options={RadarGraphChartData.options} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarGraph;
