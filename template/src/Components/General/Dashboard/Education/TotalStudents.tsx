import { ImagePath } from "@/Constant";
import { TotalStudentData } from "@/Data/General/Widgets/General";
import { Card, CardBody, Col, Row } from "reactstrap";

const TotalStudents = () => {
  return (
    <Col xl="6" md="12" className="proorder-md-1">
      <Row>
        {TotalStudentData.map((data, i) => (
          <Col xl="6" sm="6" key={i}>
            <Card>
              <CardBody className={data.class}>
                <div className="d-flex gap-2 align-items-end">
                  <div className="flex-grow-1">
                    <h2>{data.student}</h2>
                    <p className="mb-0 text-truncate"> {data.title}</p>
                    <div className="d-flex student-arrow text-truncate">
                      <p className={`mb-0 up-arrow bg-light-${data.color}`}>
                        <i className={`icon-arrow-${data.icon} font-${data.color}`} />
                      </p>
                      <span className={`f-w-500 font-${data.color}`}>{data.percentage}</span>
                      {data.detail}
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <img src={`${ImagePath}/dashboard-4/icon/${data.image}`} alt="student" />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default TotalStudents;
