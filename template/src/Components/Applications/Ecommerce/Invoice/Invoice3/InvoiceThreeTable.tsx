import { Table } from "reactstrap";
import InvoiceThreeBody from "./InvoiceThreeBody";
import { InvoiceThreeHeader } from "@/Data/Application/Ecommerce";

const InvoiceThreeTable = () => {
  return (
    <td>
      <Table className="order-details" style={{ width: "100%",borderSpacing: 5 }} borderless>
        <thead>
          <tr style={{ background: "#7A70BA" }}>
            {InvoiceThreeHeader.map((data, i) => (
              <th style={{ padding: "18px 15px", textAlign: "left", borderInline: i === 3 ? "" : "3px solid #fff", border: "none" }} key={i}>
                <span style={{ color: "#fff", fontSize: 16, fontWeight: 600 }}>{data}</span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          <InvoiceThreeBody />
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceThreeTable;
