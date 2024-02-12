import { ImagePath, ProjectStatusHeading } from "@/Constant";
import { ProjectStatusData } from "@/Data/General/Dashboard/Project";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";

const ProjectStatus = () => {
  return (
    <Col xl="3" md="6" className="col-xl-40 proorder-md-1 ">
      <Card>
        <DashboardCommonHeader title={ProjectStatusHeading} />
        <CardBody className="">
          <Row>
            {ProjectStatusData.map((data, index) => (
              <Col xs="6" key={index}>
                <div className={`btn-light1-${data.color} b-r-10`}>
                  <div className={`upcoming-box ${data.className ? data.className : ""}`}>
                    <div className={`upcoming-icon bg-${data.color}`}>
                      <img src={`${ImagePath}/dashboard-2/svg-icon/${data.image}`}alt="icons" />
                    </div>
                    <h6>{data.title}</h6>
                    <p>{data.detail}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectStatus;
