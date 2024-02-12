import { Total } from "@/Constant";

const InvoiceTotal = () => {
  return (
    <>
      <td />
      <td />
      <td className="Rate">
        <h6 className="mb-0 p-2">{Total}</h6>
      </td>
      <td className="payment">
        <h6 className="mb-0 p-2">$3,644.25</h6>
      </td>
    </>
  );
};

export default InvoiceTotal;
