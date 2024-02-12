import { ImagePath } from '@/Constant'
import { SocialWidgetsData } from '@/Data/General/Widgets/General'
import ReactApexChart from 'react-apexcharts'
import { Card, CardBody, Col } from 'reactstrap'

const SocialWidget = () => {
  return (
    <>
      {SocialWidgetsData.map((data,index) => (
        <Col xl="3" sm="6" key={index}>
          <Card className="social-widget">
            <CardBody>
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center gap-2">
                  <div className="social-icons">
                    <img src={`${ImagePath}/dashboard/social/${data.image}.png`} alt={data.alt}/>
                  </div>
                  <span className='f-w-600'>{data.title}</span>
                </div>
                <span className="font-success f-14 d-xxl-block d-xl-none">
                  {data.count}
                </span>
              </div>
              <div className="social-content">
                <div>
                  <h5 className="mb-1">{data.followers}</h5>
                  <span className="f-light">{data.content}</span>
                </div>
                <div className="social-chart">
                  <ReactApexChart id={data.id} options={data.chart} series={data.chart.series} type="radialBar" height="130" />
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  )
}

export default SocialWidget