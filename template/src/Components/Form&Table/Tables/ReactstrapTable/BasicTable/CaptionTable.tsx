import { Card, Col, Row } from "reactstrap";
import { CaptionTableTitle, UserList } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CaptionBody, CaptionData, CaptionHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const CaptionTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CaptionTableTitle} span={CaptionData} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <CommonTable caption={UserList} headData={CaptionHead}>
              {CaptionBody.map((data) => (
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>{data.employeeName}</td>
                  <td>{data.email}</td>
                  <td>{data.experience}</td>
                  <td>{data.sex}</td>
                  <td>{data.number}</td>
                  <td>{data.age}</td>
                </tr>
              ))}
            </CommonTable>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
