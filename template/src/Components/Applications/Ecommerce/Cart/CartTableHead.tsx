export const CartTableHead = () => {
const CartTableHeader = ["Product", "Product Name", "Price", "Quantity", "Action", "Total"];

  return (
    <thead>
      <tr>
        {CartTableHeader.map((items, i) => (
          <th key={i}>{items}</th>
        ))}
      </tr>
    </thead>
  );
};
