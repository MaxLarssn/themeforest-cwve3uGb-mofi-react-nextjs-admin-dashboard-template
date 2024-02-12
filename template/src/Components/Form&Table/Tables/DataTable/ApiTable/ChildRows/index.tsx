import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { ChildrenRowsTitle, SearchTableButton } from "@/Constant";
import CustomExpandableComponent from "./CustomExpandableComponent";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ChildRowColumn, ChildRowData } from "@/Data/Form&Table/Table/DataTable/ChildRowsData";
import { ZeroConfigurationData } from "@/Data/Form&Table/Table/DataTable/ZeroConfiguration";
import { useMemo, useState } from "react";

const ChildRows = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = ZeroConfigurationData.filter((item) =>item.office && item.office.toLowerCase().includes(filterText.toLowerCase()));
  
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="API-chield-row_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-2">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);
  
  return (
    <Col sm="12">
      <Card className="basic-data-table">
        <CommonCardHeader title={ChildrenRowsTitle} span={ChildRowData} />
        <CardBody>
          <div className="table-responsive">
            <div id="API-chield-row">
              <DataTable data={filteredItems} columns={ChildRowColumn} pagination expandableRows expandableRowsComponent={CustomExpandableComponent} striped  highlightOnHover className="display theme-scrollbar" subHeader subHeaderComponent={subHeaderComponentMemo}/>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ChildRows;
