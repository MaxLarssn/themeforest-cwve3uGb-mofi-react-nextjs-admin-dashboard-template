import RatioImage from "@/CommonComponent/RatioImage";
import { ImagePath } from "@/Constant";
import { InvoiceTwoDataList } from "@/Data/Application/Ecommerce";
import Image from "next/image";

const InvoiceTwoData = () => {
  return (
  <>
    {InvoiceTwoDataList.map((data,i)=>(
      <tr className="invoice-dark" style={{ backgroundColor: "rgba(123, 111, 183, 0.1)", boxShadow: "0px 1px 0px 0px rgba(82, 82, 108, 0.15)" }} key={i}>
        <td style={{ padding: "18px 15px", display: "flex", alignItems: "center", gap: 10 }} >
          <span className="bg-img-cover" style={{ width: 54, height: 51, backgroundColor: "#F5F6F9", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: 5 }} >
            <RatioImage src={`${ImagePath}/product_list/product-categories/${data.image}.png`} alt="laptop" style={{ height: 29 }} />
          </span>
          <ul style={{ padding: 0, margin: 0, listStyle: "none" }}>
            <li>
              <h4 style={{ fontWeight: 400, margin: "4px 0px", fontSize: 16 }}>{data.title}</h4>
              <span style={{ opacity: "0.8", fontSize: 14 }}>{data.code}</span>
            </li>
          </ul>
        </td>
        <td style={{ padding: "18px 15px" }}>
          <span>{data.quantity}</span>
        </td>
        <td style={{ padding: "18px 15px", width: "12%" }}>
          <span>${data.price}</span>
        </td>
        <td style={{ padding: "18px 15px", width: "12%" }}>
          <span>{data.unit}</span>
        </td>
        <td style={{ padding: "18px 15px", width: "10%" }}>
          <span>{data.vat}</span>
        </td>
        <td style={{ padding: "18px 15px" }}>
          <span>${data.total}</span>
        </td>
      </tr>
    ))}
  </>
  );
};

export default InvoiceTwoData;
