import { ImagePath } from "@/Constant";
import Image from "next/image";

const InvoiceFiveSign = () => {
  return (
    <tr style={{ width: "100%", display: "flex", justifyContent: "space-between", marginTop: 36 }} >
      <td>
        <img src={`${ImagePath}/email-template/invoice-3/sign.png`} alt="sign" />
        <span style={{ color: "#7A70BA", display: "block", fontSize: 16, fontWeight: 600 }} >Laurine T. Ebbert</span>
        <span style={{ display: "block", fontSize: 14, paddingTop: 5 }}>( Designer )</span>
      </td>
    </tr>
  );
};

export default InvoiceFiveSign;
