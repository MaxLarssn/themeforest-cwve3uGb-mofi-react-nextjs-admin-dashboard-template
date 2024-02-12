import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceFiveHeader from "./InvoiceFiveHeader";
import InvoiceNumber from "./InvoiceNumber";
import InvoiceTable from "./InvoiceTable";
import InvoiceFiveSign from "./InvoiceFiveSign";
import { InvoiceButtons } from "../Common/InvoiceButtons";

const InvoiceFiveContainer = () => {
  return (
    <>
      <Container className="invoice-2">
        <Card>
          <CardBody>
            <Table className="table-wrapper table-responsive theme-scrollbar" borderless>
              <tbody>
                <tr>
                  <td>
                    <InvoiceFiveHeader />
                  </td>
                </tr>
                <tr>
                  <InvoiceNumber />
                </tr>
                <tr>
                  <InvoiceTable />
                </tr>
                <InvoiceFiveSign />
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
      <InvoiceButtons />
    </>
  );
};

export default InvoiceFiveContainer;
