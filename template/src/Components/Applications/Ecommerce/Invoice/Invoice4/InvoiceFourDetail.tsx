import { InvoiceFourDetails } from "@/Data/Application/Ecommerce";
import { Table } from "reactstrap";

const InvoiceFourDetail = () => {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%", borderSpacing: 4, marginBottom: 20 }}>
        <tbody>
          <tr>
            {InvoiceFourDetails.map((data, i) => (
              <td style={{ background: "rgba(122, 112, 186 , 0.1)", padding: "15px 25px" }} key={i}>
                <p style={{ fontSize: 16, fontWeight: 500, color: "#7A70BA", opacity: "0.8", margin: 0, lineHeight: 2 }}>{data.title} :</p>
                <span style={{ fontSize: 16, fontWeight: 600 }}>{data.value}</span>
              </td>
            ))}
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceFourDetail;
