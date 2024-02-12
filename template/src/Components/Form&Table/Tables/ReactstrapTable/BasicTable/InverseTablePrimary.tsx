import { Card, Col } from "reactstrap";
import { InverseTablWithPrimaryBackgrounds } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { InverseTableWithBackgroundBody, InverseTableWithBackgroundData, InverseTableWithBackgroundHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import CommonTable from "./Common/CommonTable";

export const InverseTablePrimary=()=> {
  return (
    <Col sm="12">
        <Card>
         <CommonCardHeader title={InverseTablWithPrimaryBackgrounds} span={InverseTableWithBackgroundData} />
         <CommonTable strip headData={InverseTableWithBackgroundHead} tableClass='bg-primary inverse-primary' headClass='tbl-strip-thad-bdr' >
            {InverseTableWithBackgroundBody.map((data) => (
              <tr key={data.id}>
                <th scope="row">{data.id}</th>
                <td>{data.firstName}</td>
                <td>{data.lastName}</td>
                <td>{data.company}</td>
                <td>{data.salary}</td>
                <td>{data.email}</td>
                <td>{data.position}</td>
                <td>{data.country}</td>
              </tr>
            ))}
         </CommonTable>
        </Card>
    </Col>
  )
}