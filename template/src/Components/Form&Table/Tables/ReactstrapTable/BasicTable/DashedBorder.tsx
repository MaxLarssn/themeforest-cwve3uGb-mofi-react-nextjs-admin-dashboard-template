import { Card, Col, Row } from "reactstrap";
import { DashedBorderTitle } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DashedBorderData, DashedBorderHead, DashedBorderHeadBody } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const DashedBorder=()=> {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={DashedBorderTitle} span={DashedBorderData} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable tableClass="table-dashed" headData={DashedBorderHead}>
              {DashedBorderHeadBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.activity}</td>
                  <td>{data.category}</td>
                  <td>{data.time}</td>
                  <td>{data.instructor}</td>
                  <td>{data.capacity}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
}
