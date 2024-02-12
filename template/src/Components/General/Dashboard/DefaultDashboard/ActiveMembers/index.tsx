import { Card, CardBody, Col, Table } from "reactstrap";
import { ActiveMember } from "@/Constant";
import ActiveMembersTableBody from "./ActiveMembersTableBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const ActiveMembers = () => {
  return (
    <Col xxl="4" xl="5" md="7" className="box-col-5 proorder-xl-10 proorder-md-4">
      <Card>
        <DashboardCommonHeader title={ActiveMember}/>
        <CardBody className="active-members px-0 pb-0">
          <div className="table-responsive theme-scrollbar">
            <Table className="display">
              <thead>
                <tr>
                  <th>Member Profile</th>
                  <th>Today’s hrours</th>
                  <th className="text-center">Status</th>
                </tr>
              </thead>
              <ActiveMembersTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveMembers;