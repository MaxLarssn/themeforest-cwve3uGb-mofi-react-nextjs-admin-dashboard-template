import SVG from "@/CommonComponent/SVG";
import { Website } from "@/Constant";

const InvoiceRightSide = () => {
  return (
    <ul style={{ listStyle: "none", display: "flex", background: "linear-gradient(291deg, #7A70BA 21.2%, #7A70BA 83.92%)", padding: "31px 80px", borderBottomLeftRadius: 100, gap: 28 }} >
      <li>
        <SVG className="stroke-icon" iconId="call" style={{ height: "14px", width: "14px", fill: "#fff", marginRight: "10px" }} />
        <span style={{ color: "#FFFFFF" }}>(239) 555-0108</span>
      </li>
      <li style={{ borderLeft: "1px dashed rgba(255, 255, 255, 0.3)", borderRight: "1px dashed rgba(255, 255, 255, 0.3)", padding: "0 22px" }} >
        <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight:"10px" }} iconId="email-box" />
        <span style={{ color: "#FFFFFF" }}>Mofi@themesforest.com</span>
      </li>
      <li>
        <SVG className="stroke-icon" style={{ height: "16px", width: "16px", fill: "#fff", marginRight: "10px" }} iconId="web" />
        <span style={{ color: "#FFFFFF" }}>{Website}: www.Mofithemes.com</span>
      </li>
    </ul>
  );
};

export default InvoiceRightSide;
