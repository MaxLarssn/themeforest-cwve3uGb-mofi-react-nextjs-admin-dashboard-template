import { Table } from "reactstrap";
import { ShippingRate, Subtotal, TotalAmount, Vat } from "@/Constant";

const InvoiceTwoTotal = () => {
  return (
    <td>
      <Table className="table-responsive" borderless>
        <tfoot>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", paddingTop: 15 }}>
              <span style={{ fontSize: 16, fontWeight: 400 }}>{Subtotal} :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 15 }}>
              <span>$26,400.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0" }}>
              <span style={{ fontSize: 16, fontWeight: 400 }}>{Vat} (0%) :</span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0}} >
              <span>$0.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "5px 24px 5px 0", minWidth: 200 }}>
              <span style={{ fontSize: 16, fontWeight: 400 }}> {ShippingRate} : </span>
            </td>
            <td style={{ padding: "5px 0", textAlign: "left", paddingTop: 0 }} >
              <span>$10.00</span>
            </td>
          </tr>
          <tr>
            <td style={{ padding: "12px 24px 5px 0", minWidth: 200 }}>
              <span style={{ fontWeight: 600, fontSize: 20, color: "#7A70BA" }}>
                {TotalAmount} :
              </span>
            </td>
            <td style={{ padding: "12px 24px 5px 0", textAlign: "left" }} >
              <span style={{ fontWeight: 500, fontSize: 20, color: "rgba(122, 112, 186, 1)" }} >
                $26,410.00
              </span>
            </td>
          </tr>
        </tfoot>
      </Table>
    </td>
  );
};

export default InvoiceTwoTotal;
