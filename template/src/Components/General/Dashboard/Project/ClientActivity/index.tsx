import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import { ClientsActivity } from "@/Constant";
import ClientActivityTableBody from "./ClientActivityTableBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { useMemo, useState } from "react";
import { ClientActivityTableData } from "@/Data/General/Dashboard/Project";
import PaginationDynamic from "@/utils/Paginations";

const ClientActivity = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalItems = ClientActivityTableData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return ClientActivityTableData.slice(startIndex, endIndex);
  }, [currentPage]);

  return (
    <Col xl="7" className="col-xl-100 proorder-md-6">
      <Card>
        <DashboardCommonHeader title={ClientsActivity} />
        <CardBody className="pt-0 client-activity px-0">
          <div className="dataTables_wrapper">
            <div className="table-responsive theme-scrollbar">
              <Table className="display top-border dataTable" id="client-product">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <Input type="checkbox" />
                        <Label check />
                      </div>
                    </th>
                    <th>Project name</th>
                    <th>timeline</th>
                    <th>Project team </th>
                    <th>Project Type</th>
                    <th>Progress</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <ClientActivityTableBody currentItems={currentItems} />
              </Table>
            </div>
            <PaginationDynamic totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClientActivity;
