import { Col } from "reactstrap";
import UserPlans from "./UserPlans";
import CustomersSocial from "./CustomersSocial";
import Link from "next/link";
import { useAppSelector } from "@/Redux/Hooks";

const UserEvents = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Col xs="6">
      <div className="running-box">
        <div className="d-flex align-items-center justify-content-between gap-2">
          <div className="flex-grow-1">
            <Link href={`/${i18LangStatus}/ecommerce/product_page`}>
              <h5>Brooklyn Simmons</h5>
            </Link>
            <p>Web Manager</p>
          </div>
          <CustomersSocial />
        </div>
        <p>With Asana, you can bring your teams, work, and apps from everywhere in one tool. Workflows can be modified.</p>
        <UserPlans />
      </div>
    </Col>
  );
};

export default UserEvents;
