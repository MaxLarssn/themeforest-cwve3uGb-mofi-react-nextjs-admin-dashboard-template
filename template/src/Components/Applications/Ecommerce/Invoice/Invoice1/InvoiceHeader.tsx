import { ImagePath } from "@/Constant";
import { Table } from "reactstrap";

const InvoiceHeader = () => {
  return (
    <td>
      <Table className="logo-wrappper w-100 order-details" borderless>
        <tbody>
          <tr>
            <td>
              <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="logo" />
              <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_light.png`} alt="logo" />
              <span style={{ opacity: "0.8", display: "block", marginTop: 10 }} >
                202-555-0258
              </span>
            </td>
            <td className="address" style={{ textAlign: "right", opacity: "0.8"}} >
              <span>1982 Harvest Lane New York, NY12210 United State</span>
            </td>
          </tr>
        </tbody>
      </Table>
    </td>
  );
};

export default InvoiceHeader;
