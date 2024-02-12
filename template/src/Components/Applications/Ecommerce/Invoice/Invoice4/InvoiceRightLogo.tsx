import { Email, ImagePath, Phone, Website } from "@/Constant";

const InvoiceRightLogo = () => {
  return (
    <td>
      <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="logo" style={{ marginBottom: 14 }} />
      <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_light.png`} alt="logo" style={{ marginBottom: 14 }} />
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, opacity: "0.8" }} >
        2118 Thornridge Cir. Syracuse, Connecticut 35624, United State
      </span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, opacity: "0.8" }}>{Phone} : (239) 555-0108</span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, opacity: "0.8" }}>{Email} : Mofi@themesforest.com</span>
      <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400, opacity: "0.8"}}>{Website}: www.Mofithemes.com</span>
    </td>
  );
};

export default InvoiceRightLogo;
