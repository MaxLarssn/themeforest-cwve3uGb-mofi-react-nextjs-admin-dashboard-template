import { Card, Col, Row } from "reactstrap";
import { SizingTable } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SizingTableBody, SizingTableData, SizingTableHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const SizingTables=()=> {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={SizingTable} span={SizingTableData}/>
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable size="lg" headData={SizingTableHead}>
              {SizingTableBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.employeeName}</td>
                  <td>{data.date}</td>
                  <td className={`font-${data.color}`}>{data.status}</td>
                  <td>{data.hours}</td>
                  <td>{data.performance}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
