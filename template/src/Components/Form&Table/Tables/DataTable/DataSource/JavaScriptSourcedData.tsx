import { SearchTableButton } from "@/Constant";
import { JavaScriptSourceColumn, JavaScriptSourceData } from "@/Data/Form&Table/Table/DataTable/DataSourceData";
import { useMemo, useState } from "react";
import DataTable from "react-data-table-component";
import { Card, CardBody, Col, Input, Label } from "reactstrap";
import { JavaScriptTableCardHeader } from "./JavaScriptTableCardHeader";

const JavaScriptSourcedData = () => {
  const [filterText, setFilterText] = useState("");

  const filteredItems = JavaScriptSourceData.filter((item) => item.name && item.name.toLowerCase().includes(filterText.toLowerCase()));
  const subHeaderComponentMemo = useMemo(() => {
    return (
      <div id="data-source-3_filter" className="dataTables_filter d-flex align-items-center">
        <Label className="me-1">{SearchTableButton}:</Label>
        <Input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFilterText(e.target.value)} type="search" value={filterText} />
      </div>
    );
  }, [filterText]);

  return (
    <Col sm="12">
      <Card className="basic-data-table">
        <JavaScriptTableCardHeader/>
        <CardBody>
          <div className="table-responsive">
            <DataTable className="theme-scrollbar" data={filteredItems} columns={JavaScriptSourceColumn} striped highlightOnHover pagination subHeader subHeaderComponent={subHeaderComponentMemo} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default JavaScriptSourcedData;
