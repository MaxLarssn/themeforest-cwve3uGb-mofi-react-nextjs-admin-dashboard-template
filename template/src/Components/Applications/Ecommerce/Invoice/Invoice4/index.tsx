import { Card, CardBody, Container, Table } from "reactstrap";
import InvoiceFourHeader from "./InvoiceFourHeader";
import InvoiceFourDetail from "./InvoiceFourDetail";
import InvoiceFourTable from "./InvoiceFourTable";
import InvoiceTotal from "./InvoiceTotal";
import { InvoiceButtons } from "../Common/InvoiceButtons";

const InvoiceFourContainer = () => {
  return (
    <>
      <Container className="invoice-2">
        <Card>
          <CardBody>
            <Table className="table-wrapper table-responsive theme-scrollbar" borderless>
              <tbody>
                <tr>
                  <InvoiceFourHeader />
                </tr>
                <tr>
                  <InvoiceFourDetail />
                </tr>
                <tr>
                  <InvoiceFourTable />
                </tr>
                <tr style={{ height: 3, width: "100%", background: "linear-gradient(90deg, #7A70BA 20.61%, #0DA759 103.6%)", display: "block", marginTop: 6 }} />
                <tr>
                  <InvoiceTotal />
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

export default InvoiceFourContainer;
