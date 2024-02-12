import { InvoiceThreeData } from "@/Data/Application/Ecommerce";

const InvoiceThreeBody = () => {
  return (
    <>
      {InvoiceThreeData.map((data,i)=>(
        <tr key={i}>
          <td style={{ padding: "18px 15px 18px 0", display: "flex", alignItems: "center",gap: 10, borderBottom: "1px solid #52526C4D"}} >
            <span style={{ width: 3, height: 37, backgroundColor: `#${data.color}` }} />
            <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
              <li>
                <h4 style={{ fontWeight: 600, margin: "4px 0px", fontSize: 16, color: "#7A70BA" }}>{data.title}</h4>
                <span style={{ opacity: "0.8", fontSize: 16 }}>{data.detail}</span>
              </li>
            </ul>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid #52526C4D" }} >
            <span style={{ opacity: "0.8" }}>{data.quantity}</span>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid #52526C4D"}} >
            <span style={{ opacity: "0.8" }}>${data.price}</span>
          </td>
          <td style={{ padding: "18px 15px", width: "12%", textAlign: "center", borderBottom: "1px solid #52526C4D" }} >
            <span style={{ opacity: "0.8" }}>${data.total}</span>
          </td>
        </tr>
      ))}
    </>
  );
};

export default InvoiceThreeBody;
