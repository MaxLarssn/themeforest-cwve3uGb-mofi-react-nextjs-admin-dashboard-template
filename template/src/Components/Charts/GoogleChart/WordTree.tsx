import { Card, CardBody, Col } from "reactstrap";
import { WordTreeChart } from "@/Constant";
import { Chart } from "react-google-charts";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WordTreeChartData, WordTreeChartDataOption } from "@/Data/Charts/GoogleChart";

const WordTree = () => {
  return (
    <Col sm="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader title={WordTreeChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="wordtree_basic">
            <Chart chartType="WordTree" width="100%" height="400px" data={WordTreeChartData} options={WordTreeChartDataOption} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WordTree;
