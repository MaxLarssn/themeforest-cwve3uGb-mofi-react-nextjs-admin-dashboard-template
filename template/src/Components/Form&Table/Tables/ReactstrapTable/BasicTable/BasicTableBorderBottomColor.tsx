import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicTableWithBorderBottomColor, ImagePath } from "@/Constant";
import { BasicTableBody, BasicTableBorderColor, BasicTableHead } from "@/Data/Form&Table/Table/ReactstrapTable/BasicTable";
import { Badge, Card, Col } from "reactstrap";
import CommonTable from "./Common/CommonTable";

const BasicTableBorderBottomColor = () => {
  return (
    <Col sm="12">
      <Card className="basicborder-table">
        <CommonCardHeader title={BasicTableWithBorderBottomColor} span={BasicTableBorderColor} />
        <CommonTable headData={BasicTableHead} headRowClass="border-bottom-primary">
          {BasicTableBody.map((data) => (
            <tr className={`border-bottom-${data.color}`} key={data.id}>
              <th scope="row">{data.id}</th>
              <td>
                <img className="img-30 me-2" src={`${ImagePath}/${data.image}`} alt="users" />
                {data.firstname}
              </td>
              <td>{data.lastName}</td>
              <td>{data.userName}</td>
              <td>{data.designation}</td>
              <td>{data.company}</td>
              <td>
                <Badge color={`light-${data.badgeColor}`} className={`text-${data.badgeColor}`}>{data.language}</Badge>
              </td>
              <td>{data.country}</td>
            </tr>
          ))}
        </CommonTable>
      </Card>
    </Col>
  );
};

export default BasicTableBorderBottomColor;
