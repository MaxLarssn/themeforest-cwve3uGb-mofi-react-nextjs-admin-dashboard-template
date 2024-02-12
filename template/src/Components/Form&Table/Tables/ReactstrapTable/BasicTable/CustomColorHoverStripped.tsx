import { Card, Col } from "reactstrap";
import { CustomColorHoverStrippedTitle } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomColorHoverBody, CustomColorHoverData, CustomColorHoverHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const CustomColorHoverStripped=()=> {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomColorHoverStrippedTitle} span={CustomColorHoverData} />
        <CommonTable strip hover tableClass="bg-primary inverse-primary" headClass="tbl-strip-thad-bdr" headData={CustomColorHoverHead}>
          {CustomColorHoverBody.map((data) => (
            <tr key={data.id}>
              <th scope="row">{data.id}</th>
              <td>{data.title}</td>
              <td>{data.year}</td>
              <td>{data.studio}</td>
              <td>{data.budget}</td>
              <td>{data.boxOffice}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
}
