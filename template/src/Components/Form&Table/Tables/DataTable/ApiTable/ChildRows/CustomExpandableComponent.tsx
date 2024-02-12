import { Table } from "reactstrap";
import { ApiExtraInfo, ApiFullName, ExtraInfo } from "@/Constant";
import { CustomExpandableComponentProp } from "@/Types/TableType";

const CustomExpandableComponent : React.FC<CustomExpandableComponentProp> = ({ data }) => {
  return (
    <Table cellPadding={5} cellSpacing={0} border={0} style={{ paddingLeft: 50 }}>
      <tbody>
        <tr>
          <td>ID:</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>{ApiFullName}:</td>
          <td>{data.name}</td>
        </tr>
        <tr>
          <td>{ExtraInfo}:</td>
          <td>{ApiExtraInfo}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default CustomExpandableComponent;