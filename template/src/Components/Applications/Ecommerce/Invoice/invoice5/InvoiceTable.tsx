import { Table } from "reactstrap";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableBody from "./InvoiceTableBody";
import InvoiceTableTotal from "./InvoiceTableTotal";

const InvoiceTable = () => {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%", borderSpacing: 0 }} >
        <thead>
            <InvoiceTableHeader />
        </thead>
        <tbody>
            <InvoiceTableBody />
            <InvoiceTableTotal />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceTable;
