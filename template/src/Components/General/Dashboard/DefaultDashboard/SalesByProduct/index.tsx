import { Card, CardBody, Col, Table } from "reactstrap";
import { SalesbyProduct } from "@/Constant";
import SalesByProductTableBody from "./SalesByProductTableBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const SalesByProduct = () => {
  return (
    <Col xxl="5" xl="7" className="box-col-7 proorder-xl-9 proorder-md-10">
      <Card>
      <DashboardCommonHeader title={SalesbyProduct} />
        <CardBody className="sales-product px-0 pb-0">
          <div className="table-responsive theme-scrollbar">
            <Table className="display" style={{ width: "100%" }}>
              <thead>
                <tr>
                  <th>Files Name</th>
                  <th>Amount</th>
                  <th>% Sold</th>
                  <th>Progressbar</th>
                </tr>
              </thead>
              <SalesByProductTableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SalesByProduct;
