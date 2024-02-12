import { Table } from "reactstrap";
import { AccountNo, Date, DueAmount, InvoiceNo } from "@/Constant";

const InvoiceNumber = () => {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }} >
        <tbody>
          <tr>
            <td style={{ background: "rgba(122, 112, 186 , 0.1)", padding: "15px 25px" }} >
              <p style={{ fontSize: 16, fontWeight: 500, color: "#7A70BA", opacity: "0.8", margin: 0, lineHeight: 2 }} >{Date} :</p>
              <span style={{ fontSize: 16, fontWeight: 600 }}>10 Mar, 2023</span>
            </td>
            <td style={{ background: "rgba(122, 112, 186 , 0.1)", padding: "15px 25px" }} >
              <p style={{ fontSize: 16, fontWeight: 500, color: "#7A70BA", opacity: "0.8", margin: 0, lineHeight: 2 }} >{InvoiceNo} :</p>
              <span style={{ fontSize: 16, fontWeight: 600 }}>#VL25000365</span>
            </td>
            <td style={{ background: "rgba(122, 112, 186 , 0.1)", padding: "15px 25px"}}>
              <p style={{ fontSize: 16, fontWeight: 500, color: "#7A70BA", opacity: "0.8", margin: 0, lineHeight: 2}}>{AccountNo} :</p>
              <span style={{ fontSize: 16, fontWeight: 600 }}>0981234098765</span>
            </td>
            <td style={{ background: "rgba(122, 112, 186 , 0.1)", padding: "15px 25px" }} >
              <p style={{ fontSize: 16, fontWeight: 500, color: "#7A70BA", opacity: "0.8", margin: 0, lineHeight: 2 }} >{DueAmount} :</p>
              <span style={{ fontSize: 16, fontWeight: 600 }}>$7860.00 </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceNumber;
