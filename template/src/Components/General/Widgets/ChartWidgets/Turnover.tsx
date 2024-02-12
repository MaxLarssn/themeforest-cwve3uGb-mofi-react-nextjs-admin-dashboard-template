import { Card, CardBody, CardHeader, Col, Row } from 'reactstrap'
import ReactApexChart from 'react-apexcharts'
import { TurnOver } from '@/Constant'
import { TurnOverChart } from '@/Data/General/Widgets/Chart'
import CommonCardHeader from '@/CommonComponent/CommonCardHeader'

const Turnover = () => {
  return (
    <Col xl="5" lg="12" className="xl-50">
      <Card>
        <CommonCardHeader title={TurnOver}/>
        <CardBody>
          <div className="chart-container">
            <Row>
              <Col xs="12">
                <ReactApexChart id="chart-widget7" options={TurnOverChart} series={TurnOverChart.series} type="area" height={300}/>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  )
}

export default Turnover