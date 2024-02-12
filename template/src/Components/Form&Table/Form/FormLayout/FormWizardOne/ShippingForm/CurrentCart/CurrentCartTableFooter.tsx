import { CurrentCartFooter } from "@/Data/Form&Table/Form";

const CurrentCartTableFooter = () => {
  return (
    <tfoot>
      {CurrentCartFooter.map((data, index) => (
        <tr key={index}>
          <td>{data.footerTittle}</td>
          <td colSpan={2}>${data.price} </td>
        </tr>
      ))}
    </tfoot>
  );
};

export default CurrentCartTableFooter;
