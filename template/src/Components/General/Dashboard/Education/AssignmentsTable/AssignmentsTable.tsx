import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import { Assignments } from "@/Constant";
import AssignmentsTableBody from "./AssignmentsTableBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { useMemo, useState } from "react";
import { AssignmentData } from "@/Data/General/Dashboard/Education";
import PaginationDynamic from "@/utils/Paginations";

const AssignmentsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalItems = AssignmentData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return AssignmentData.slice(startIndex, endIndex);
  }, [currentPage]);

  return (
    <Col xl="8" md="12" className="proorder-md-4">
      <Card>
        <DashboardCommonHeader title={Assignments} />
        <CardBody className="pt-0 assignments-table px-0">
          <div className="dataTables_wrapper">
            <div className="table-responsive theme-scrollbar">
              <Table className="display top-border dataTable" id="assignments-table">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <Input type="checkbox" />
                        <Label check />
                      </div>
                    </th>
                    <th>Id no</th>
                    <th>Teacher</th>
                    <th>Subject</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Progress</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <AssignmentsTableBody currentItems={currentItems} />
              </Table>
            </div>
            <PaginationDynamic totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AssignmentsTable;
