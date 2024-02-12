import UpcomingDatePicker from "@/Components/General/Dashboard/DefaultDashboard/UpcomingAppointments/UpcomingDatePicker";
import DashboardCommonHeader from "@/Components/General/Dashboard/common/DashboardCommonHeader";
import { ImagePath, UpcomingAppointments } from "@/Constant";
import { UpcomingData } from "@/Data/General/Dashboard/DefaultDashboard";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Card, CardBody, Col, Row } from "reactstrap";

const UpcomingAppointment = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Col xxl="6" xl="6" className="box-col-6 proorder-xl-7 proorder-md-8">
      <Card>
        <DashboardCommonHeader title={UpcomingAppointments} dropDownFalse/>
        <CardBody className="appointments relative general-datepicker">
          <Row>
            <Col xs="5">
              <ul className="appointments-user">
                {UpcomingData.map((data, i) => (
                  <li className="d-flex align-items-center" key={i}>
                    <div className="flex-shrink-0">
                      <img src={`${ImagePath}/dashboard/user/${data.img}`} alt="userImage"/>
                    </div>
                    <div className="flex-grow-1">
                      <Link href={`/${i18LangStatus}/chat/private_chat`}>
                        <h5>{data.name}</h5>
                      </Link>
                      <p>{data.date}
                        <span>({data.time})</span>
                      </p>
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

export default UpcomingAppointment;
