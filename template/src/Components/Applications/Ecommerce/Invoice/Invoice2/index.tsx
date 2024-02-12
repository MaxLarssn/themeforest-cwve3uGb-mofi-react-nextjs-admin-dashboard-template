import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceTwoHeader from "./InvoiceTwoHeader";
import InvoiceTwoDetails from "./InvoiceTwoDetails";
import InvoiceTwoBilling from "./InvoiceTwoBilling";
import InvoiceTwoContent from "./InvoiceTwoContent";
import InvoiceTwoTotal from "./InvoiceTwoTotal";
import { InvoiceButtons } from "../Common/InvoiceButtons";

const InvoiceTwoContainer = () => {
  return (
    <>
      <Container className="invoice-2">
        <Card>
          <CardBody className="table-responsive theme-scrollbar">
            <Table className="table-wrapper" borderless>
              <tbody>
                <tr>
                  <InvoiceTwoHeader />
                </tr>
                <tr>
                  <InvoiceTwoDetails />
                </tr>
                <tr>
                  <InvoiceTwoBilling />
                </tr>
                <tr>
                  <InvoiceTwoContent />
                </tr>
                <tr>
                  <InvoiceTwoTotal />
                </tr>
                <tr>
                  <td>
                    <span style={{ display: "block", background: "rgba(82, 82, 108, 0.3)", height: 1, width: "100%", marginBottom: 30 }} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Container>
      <InvoiceButtons />
    </>
  );
};

export default InvoiceTwoContainer;
