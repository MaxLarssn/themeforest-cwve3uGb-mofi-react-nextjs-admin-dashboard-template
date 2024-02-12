import { Projects } from "@/Constant";
import { ProjectsTableData } from "@/Data/General/Dashboard/DefaultDashboard";
import { useMemo, useState } from "react";
import { Card, CardBody, Col, Table } from "reactstrap";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { ProjectsTableBody } from "./ProjectsTableBody";
import { ProjectsTableHead } from "./ProjectsTableHead";
import PaginationDynamic from "@/utils/Paginations";

const ProjectsTable = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalItems = ProjectsTableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ProjectsTableData.slice(startIndex, endIndex);
  }, [currentPage]);

  return (
    <Col xl="7" className="proorder-xl-5 box-col-7 proorder-md-5">
      <Card>
        <DashboardCommonHeader title={Projects} />
        <CardBody className="pt-0 projects px-0">
          <div className="dataTables_wrapper">
            <div className="table-responsive theme-scrollbar">
              <Table className="display w-100 top-border dataTable" id="selling-product">
                <ProjectsTableHead />
                <ProjectsTableBody currentItems={currentItems} />
              </Table>
            </div>
            <PaginationDynamic totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsTable;
