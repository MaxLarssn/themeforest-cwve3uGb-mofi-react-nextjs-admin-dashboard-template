import { ImagePath, TaskCompleted } from "@/Constant";
import { WebsiteDesignData } from "@/Data/General/Widgets/General";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Button, Card, CardBody, Col, Progress } from "reactstrap";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import WebsiteDesignRatting from "./WebsiteDesignRatting";

const WebsiteDesign = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <>
      {WebsiteDesignData.map((data, index) => (
        <Col xl="3" md="6" className={`col-xl-50 ${data.class}`} key={index}>
          <Card>
            <DashboardCommonHeader title={data.title} />
            <CardBody className="designer-card">
              <div>
                <div className="d-flex align-items-center gap-2">
                  <div className="flex-shrink-0">
                    <img src={`${ImagePath}/dashboard-2/user/${data.image}`} alt="user" />
                  </div>
                  <div className="flex-grow-1">
                    <Link href={`/${i18LangStatus}/ecommerce/product_page`}><h5>{data.header}</h5></Link>
                    <p>{data.email}</p>
                  </div>
                </div>
                <div className="design-button">
                  {data.button.map((item, index) => (
                    <Button className={`bg-light-${item.color} font-${item.color} f-w-500 me-1`} key={index} color="transparent"> {item.buttonName} </Button>
                  ))}
                </div>
                <WebsiteDesignRatting data={data}/>
                <h5 className="f-w-500 pb-2">{TaskCompleted}: {data.task}/10</h5>
                <Progress striped animated className={`progress-striped-${data.color} b-r-2`} value={data.value} />
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default WebsiteDesign;
