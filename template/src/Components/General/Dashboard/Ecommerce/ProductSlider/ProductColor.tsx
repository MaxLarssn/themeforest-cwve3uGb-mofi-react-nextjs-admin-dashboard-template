import { Color } from "@/Constant";

const ProductColor = () => {
  return (
    <>
      <h5>{Color}:</h5>
      <ul className="product-color flex-row">
        <li className="border-primary">
          <span className="bg-primary">
            <i className="icon-check" />
          </span>
        </li>
        <li className="border-secondary">
          <span className="bg-secondary"> </span>
        </li>
        <li className="border-warning">
          <span className="bg-warning"> </span>
        </li>
        <li className="border-tertiary">
          <span className="bg-tertiary" />
        </li>
      </ul>
    </>
  );
};

export default ProductColor;
