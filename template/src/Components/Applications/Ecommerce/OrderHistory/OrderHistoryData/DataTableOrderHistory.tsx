import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { OrdersHistory, SearchTableButton } from "@/Constant";
import DataTable from "react-data-table-component";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OrderHistoryData, OrderHistoryDataColumn } from "@/Data/Application/Ecommerce";
import { useMemo, useState } from "react";

const DataTableOrderHistory = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = OrderHistoryData.filter((item) =>item.productName && item.productName.toLowerCase().includes(filterText.toLowerCase()));
  
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="basic-1_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OrdersHistory} />
        <CardBody>
          <div className="order-history table-responsive">
            <DataTable data={filteredItems} columns={OrderHistoryDataColumn} className="dataTables_wrapper no-footer theme-scrollbar" highlightOnHover noHeader pagination paginationServer subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DataTableOrderHistory;