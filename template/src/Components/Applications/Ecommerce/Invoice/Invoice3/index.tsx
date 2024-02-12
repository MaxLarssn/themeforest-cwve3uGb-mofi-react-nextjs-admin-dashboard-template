import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceThreeHeader from "./InvoiceThreeHeader";
import InvoiceClientDetail from "./InvoiceClientDetail";
import InvoiceThreeTable from "./InvoiceThreeTable";
import InvoiceBankTransfer from "./InvoiceBankTransfer";
import { InvoiceButtons } from "../Common/InvoiceButtons";

const InvoiceThreeContainer = () => {
  return (
    <>
      <Container className="invoice-2">
        <Card>
          <CardBody className="table-responsive theme-scrollbar">
            <div>
              <Table className="table-wrapper" borderless>
                <tbody>
                  <tr>
                    <InvoiceThreeHeader />
                  </tr>
                  <tr>
                    <InvoiceClientDetail />
                  </tr>
                  <tr>
                    <td>
                      <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 20 }}></span>
                    </td>
                  </tr>
                  <tr>
                    <InvoiceThreeTable />
                  </tr>
                  <tr>
                    <InvoiceBankTransfer />
                  </tr>
                  <tr>
                    <td>
                      <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 30 }} />
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Container>
      <InvoiceButtons />
    </>
  );
};

export default InvoiceThreeContainer;
