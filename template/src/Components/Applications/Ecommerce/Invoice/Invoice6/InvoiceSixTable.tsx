import { Table } from "reactstrap";
import InvoiceSixTableHeader from "./InvoiceSixTableHeader";
import InvoiceTotal from "./InvoiceTotal";
import InvoiceSixTableBody from "./InvoiceSixTableBody";
import InvoiceFooter from "./InvoiceFooter";

const InvoiceSixTable = () => {
  return (
    <div>
      <div className="table-responsive invoice-table" id="table">
        <Table bordered striped>
          <tbody>
            <tr>
              <InvoiceSixTableHeader />
            </tr>
            <InvoiceSixTableBody />
            <tr>
              <InvoiceTotal />
            </tr>
          </tbody>
        </Table>
      </div>
      <InvoiceFooter />
    </div>
  );
};

export default InvoiceSixTable;
