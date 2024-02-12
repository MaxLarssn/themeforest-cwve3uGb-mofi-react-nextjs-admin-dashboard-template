import { ImagePath, Notifications } from "@/Constant";
import { NotificationsData } from "@/Data/General/Dashboard/DefaultDashboard";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Card, CardBody, Col } from "reactstrap";
import DashboardCommonHeader from "../common/DashboardCommonHeader";

const UserNotifications = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);

  return (
    <Col xxl="3" xl="6" md="5" className="box-col-6 proorder-xl-6 proorder-md-7"  >
      <Card>
      <DashboardCommonHeader title={Notifications}/>
        <CardBody>
          <ul className="notification-box">
            {NotificationsData.map((data, i) => (
              <li className="d-flex" key={i}>
                <div className={`flex-shrink-0 bg-light-${data.color}`}>
                  <img src={`${ImagePath}/dashboard/icon/${data.img}`} alt="Wallet" />
                </div>
                <div className="flex-grow-1">
                  <Link href={`/${i18LangStatus}/chat/private_chat`}>
                    <h5>{data.title}</h5>
                  </Link>
                  <p className="text-truncate">{data.subTitle}</p>
                </div>
                <span>{data.date}</span>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default UserNotifications;
