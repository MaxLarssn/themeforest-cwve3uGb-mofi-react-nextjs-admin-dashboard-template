import { Card, CardBody, Col } from "reactstrap";
import { EnrolledClass, Href } from "@/Constant";
import DashboardCommonHeader from "../common/DashboardCommonHeader";
import { EnrolledData } from "@/Data/General/Dashboard/Education";
import Link from "next/link";
import { CommonDropdown } from "../common/CommonDropdown";

const EnrolledClasses = () => {
  return (
    <Col xxl="3" xl="5" md="6" className="box-col-5 proorder-md-6">
      <Card>
        <DashboardCommonHeader title={EnrolledClass} />
        <CardBody className="pt-0 pb-1">
          <ul className="enrolled-class">
            {EnrolledData.map((data, i) => (
              <li className="d-flex align-items-center gap-2" key={i}>
                <span className={`b-${data.color} bg-${data.color}`} />
                <div className="flex-grow-1">
                  <Link href={Href}>
                    <h5 className="text-truncate">{data.title} </h5>
                  </Link>
                  <p>{data.time}</p>
                </div>
                <div className="flex-shrink-0">
                  <CommonDropdown />
                </div>
              </li>
            ))}
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};

export default EnrolledClasses;
