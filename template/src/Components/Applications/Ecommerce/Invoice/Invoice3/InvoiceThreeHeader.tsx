import { Table } from "reactstrap";
import { ImagePath, Invoice } from "@/Constant";

const InvoiceThreeHeader = () => {
  return (
    <td>
      <Table className="table-responsive" style={{ width: "100%", backgroundImage: `url(${ImagePath}/email-template/invoice-3/bg-0.png)`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat", borderRadius: 10 }} >
        <tbody>
          <tr>
            <td style={{ padding: "30px 0 30px 30px" }}>
              <img src={`${ImagePath}/logo/logo.png`} alt="logo" />
              <address style={{ opacity: "0.8", width: "36%", marginTop: 10, fontStyle: "normal" }}>
                <span style={{ fontSize: 16, lineHeight: "1.5", fontWeight: 500}} >1982 Harvest Lane New York, NY12210 United State</span>
              </address>
            </td>
            <td style={{ textAlign: "end", padding: "30px 30px 30px 0"}}>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 700 }}>{Invoice}</span>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 500}}>Receipt #1923195</span>
              <span style={{  display: "block", lineHeight: "1.5", fontSize: 16, color: "#fff", fontWeight: 500}}>May 02, 2023
              </span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceThreeHeader;
