import { Table } from "reactstrap";
import { AllTaxesIncluded, BankTransfer, BankAccount, Code, TotalAmounts } from "@/Constant";

const InvoiceBankTransfer = () => {
  return (
    <td>
      <Table style={{ width: "100%" }}>
        <tbody>
          <tr style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }} >
            <td>
              <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }}>{BankTransfer}</span>
              <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 16, color: "#7A70BA" }}>Leslie Alexander</h4>
              <span style={{ display: "block", lineHeight: "1.5", fontSize: 16, fontWeight: 400 }}>{BankAccount} : 0981234098765</span>
              <span style={{ lineHeight: "1.6", fontSize: 16, fontWeight: 400 }}>{Code} : LEF098756</span>
            </td>
            <td>
              <span style={{ fontSize: 16, fontWeight: 600, opacity: "0.8" }}>{TotalAmounts}</span>
              <h4 style={{ fontWeight: 600, margin: "12px 0 5px 0", fontSize: 26,  color: "#7A70BA" }}>$175.00</h4>
              <span style={{ fontSize: 16, fontWeight: 400, lineHeight: "1.5" }}>{AllTaxesIncluded}</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceBankTransfer;
