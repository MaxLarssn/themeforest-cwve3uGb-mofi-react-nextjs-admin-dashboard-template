import { useAppSelector } from "@/Redux/Hooks";
import { getallCardTotal } from "@/utils/Ecommerce.service";

const InvoiceOrderTax = () => {
  const {cart,tax} = useAppSelector((state) => state.cartData)
  return (
    <>
      <td> </td>
      <td> </td>
      <td style={{ padding: "5px 0", paddingTop: 0 }}>
        <span>Tax({tax}%)</span>
      </td>
      <td style={{ padding: "5px 0", textAlign: "right", paddingTop: 0 }}>
        <span>$ {getallCardTotal(cart)*tax/100}</span>
      </td>
    </>
  );
};

export default InvoiceOrderTax;
