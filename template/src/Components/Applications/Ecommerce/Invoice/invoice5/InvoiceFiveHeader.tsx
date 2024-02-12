import { ImagePath } from "@/Constant";
import { Table } from "reactstrap";
import InvoiceAddress from "./InvoiceAddress";
import InvoiceDetail from "./InvoiceDetail";
import InvoiceRightSide from "./InvoiceRightSide";

const InvoiceFiveHeader = () => {
  return (
    <Table className="table-responsive" style={{ width: "100%" }} borderless>
      <tbody>
        <tr style={{ padding: "28px 0 5px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <td>
            <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="logo" />
            <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_light.png`} alt="logo" />
          </td>
          <td>
            <InvoiceRightSide />
          </td>
        </tr>
        <tr style={{ display: "flex", justifyContent: "space-between" }}>
          <InvoiceAddress />
          <InvoiceDetail />
        </tr>
      </tbody>
    </Table>
  );
};

export default InvoiceFiveHeader;
