import { Discount, Subtotal, TotalDue, VATTax } from "@/Constant";

const InvoiceTableTotal = () => {
  return (
    <>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td style={{ textAlign: "center", padding: "35px 0 18px" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>{Subtotal} </span>
        </td>
        <td style={{ textAlign: "center", background: "rgba(122, 112, 186 , 0.1)", display: "block", padding: "35px 0 18px" }}>
          <span style={{ color: "#7A70BA", fontWeight: 600, opacity: "0.9" }}>$6100.00</span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td> </td>
        <td style={{ width: "12%", textAlign: "center" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>{VATTax}</span>
        </td>
        <td style={{ textAlign: "center", background: "rgba(122, 112, 186 , 0.1)", display: "block", paddingBottom: 18 }}>
          <span style={{ color: "#7A70BA", fontWeight: 600, opacity: "0.9" }}>$50.00</span>
        </td>
      </tr>
      <tr>
        <td />
        <td />
        <td> </td>
        <td style={{ width: "12%", textAlign: "center" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>{Discount} </span>
        </td>
        <td style={{ textAlign: "center", background: "rgba(122, 112, 186 , 0.1)", display: "block", paddingBottom: 18 }}>
          <span style={{ color: "#7A70BA", fontWeight: 600, opacity: "0.9" }}>$30.00</span>
        </td>
      </tr>
      <tr>
        <td> </td>
        <td> </td>
        <td />
        <td style={{ width: "12%", textAlign: "center" }}>
          <span style={{ opacity: "0.8", fontWeight: 600 }}>{TotalDue}</span>
        </td>
        <td style={{ textAlign: "center", background: "rgba(122, 112, 186 , 0.1)" }}>
          <span style={{ color: "#ffffff", fontWeight: 600, opacity: "0.9", background: "#7A70BA", padding: "12px 37px", marginTop: 0, display: "block" }}>$6120.00</span>
        </td>
      </tr>
    </>
  );
};

export default InvoiceTableTotal;
