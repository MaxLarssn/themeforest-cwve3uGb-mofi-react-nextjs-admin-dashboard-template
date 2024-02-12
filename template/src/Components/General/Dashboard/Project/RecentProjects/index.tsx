import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import { RecentProject } from "@/Constant";
import RecentProjectsTableBody from "./RecentProjectsTableBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const RecentProjects = () => {
  return (
    <Col xl="5" md="12" className="col-xl-70 proorder-md-3">
      <Card>
        <DashboardCommonHeader title={RecentProject} />
        <CardBody className="projects p-0">
          <div className="table-responsive theme-scrollbar">
            <div className="dataTables_wrapper">
              <Table className="display overflow-hidden w-100 dataTable" id="recent-product" >
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <Input type="checkbox" />
                        <Label check />
                      </div>
                    </th>
                    <th>Name</th>
                    <th className="px-0">Team</th>
                    <th>Started</th>
                    <th>Finished</th>
                    <th>Progress</th>
                    <th className="px-2">Actions</th>
                  </tr>
                </thead>
                <RecentProjectsTableBody />
              </Table>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentProjects;
