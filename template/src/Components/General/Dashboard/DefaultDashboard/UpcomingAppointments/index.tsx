import { ImagePath, UpcomingAppointment } from "@/Constant";
import { UpcomingData } from "@/Data/General/Dashboard/DefaultDashboard";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Card, CardBody, Col, Row } from "reactstrap";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import UpcomingDatePicker from "./UpcomingDatePicker";

const UpcomingAppointments = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Col xxl="5" xl="6" className="box-col-6 proorder-xl-7 proorder-md-8">
      <Card>
        <DashboardCommonHeader title={UpcomingAppointment} />
        <CardBody className="appointments relative">
          <Row>
            <Col xs="5">
              <ul className="appointments-user">
                {UpcomingData.map((data, i) => (
                  <li className="d-flex align-items-center" key={i}>
                    <div className="flex-shrink-0">
                      <img src={`${ImagePath}/dashboard/user/${data.img}`} alt="userImage"  />
                    </div>
                    <div className="flex-grow-1">
                      <Link href={`/${i18LangStatus}/chat/private_chat`}>
                        <h5>{data.name}</h5>
                      </Link>
                      <p>{data.date}<span>({data.time})</span></p>
                    </div>
                  </li>
                ))}
              </ul>
            </Col>
            <UpcomingDatePicker />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UpcomingAppointments;
