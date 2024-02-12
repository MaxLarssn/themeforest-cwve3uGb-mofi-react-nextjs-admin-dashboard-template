import DashboardCommonHeader from "@/Components/General/Dashboard/common/DashboardCommonHeader";
import { Design3D, ImagePath, SquareDashboard, TaskCompleted, UXDesign, WebsiteDesigns } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Button, Card, CardBody, Col, Progress } from "reactstrap";
import WebsiteRatting from "./WebsiteRatting";

const WebsiteDesign = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Col xxl="3" xl="4" sm="6">
      <Card>
        <DashboardCommonHeader title={WebsiteDesigns}/>
        <CardBody className="designer-card">
          <div>
            <div className="d-flex align-items-center gap-2">
              <div className="flex-shrink-0">
                <img src={`${ImagePath}/dashboard-2/user/16.png`} alt="user" />
              </div>
              <div className="flex-grow-1">
                <Link href={`/${i18LangStatus}/ecommerce/product_page`}><h5>{SquareDashboard}</h5></Link>
                <p>{"karson123@gmail.com"}</p>
              </div>
            </div>
            <div className="design-button">
              <Button className="bg-light-primary font-primary f-w-500 me-1" color="transparent">{UXDesign}</Button>
              <Button className="bg-light-secondary font-secondary f-w-500" color="transparent">{Design3D}</Button>
            </div>
            <WebsiteRatting />
            <h5 className="f-w-500 pb-2">{TaskCompleted}: 6/10</h5>
            <Progress striped animated className="progress-striped-primary" value={50} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WebsiteDesign;
