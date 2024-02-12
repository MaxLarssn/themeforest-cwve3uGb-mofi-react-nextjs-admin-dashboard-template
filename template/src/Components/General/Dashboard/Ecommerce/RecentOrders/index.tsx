import { Card, CardBody, Col, Input, Label, Table } from "reactstrap";
import { RecentOrder } from "@/Constant";
import RecentOrdersBody from "./RecentOrdersBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";
import { RecentOrdersData } from "@/Data/General/Dashboard/Ecommerce";
import { useMemo, useState } from "react";
import PaginationDynamic from "@/utils/Paginations";

const RecentOrders = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 4;
  const totalItems = RecentOrdersData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const currentItems = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return RecentOrdersData.slice(startIndex, endIndex);
  }, [currentPage]);

  return (
    <Col xxl="7" xl="8" sm="12">
      <Card>
        <DashboardCommonHeader title={RecentOrder} />
        <CardBody className="pt-0 recent-orders px-0">
          <div className="dataTables_wrapper">
            <div className="table-responsive theme-scrollbar">
              <Table className="display mb-2 dataTable" id="recent-orders">
                <thead>
                  <tr>
                    <th>
                      <div className="form-check">
                        <Input type="checkbox" />
                        <Label check/>
                      </div>
                    </th>
                    <th>Recent Orders</th>
                    <th>Order Date</th>
                    <th>QTY</th>
                    <th>Customer</th>
                    <th>Price </th>
                    <th>Status</th>
                  </tr>
                </thead>
                <RecentOrdersBody currentItems={currentItems} />
              </Table>
              
            </div>
            <PaginationDynamic totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RecentOrders;
