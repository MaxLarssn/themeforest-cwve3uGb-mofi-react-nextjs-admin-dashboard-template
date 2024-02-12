import { Card, CardBody, Col } from "reactstrap";
import { Href, ImagePath, RecentCustomer } from "@/Constant";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { RecentCustomerData } from "@/Data/General/Dashboard/Ecommerce";
import Image from "next/image";
import Link from "next/link";
import { useAppSelector } from "@/Redux/Hooks";

const RecentCustomers = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Col xl="3" lg="5" sm="6">
      <Card>
        <DashboardCommonHeader title={RecentCustomer} />
        <CardBody className="pt-0">
          <ul className="recent-customers">
            {RecentCustomerData.map((data, i) => (
              <li className="d-flex align-items-center gap-2" key={i}>
                <div className="flex-shrink-0">
                  <img src={`${ImagePath}/dashboard-3/user/${data.image}`} alt="users" />
                </div>
                <div className="flex-grow-1">
                  <Link href={`/${i18LangStatus}/ecommerce/cart`}><h5>{data.name}</h5></Link>
                  <p className="text-truncate">ID #{data.id} <span className={`text-${data.color}`}>{data.status}</span></p>
                </div>
                <div className="active-status active-online" />
                <div className="recent-text">
                  <h5>${data.amount}</h5>
                  <p>{data.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentCustomers;
