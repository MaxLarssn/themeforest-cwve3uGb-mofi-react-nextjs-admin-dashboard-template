import { ProductDetails } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ModalProductDetailsProp } from "@/Types/EcommerceType";
import { Button } from "reactstrap";

export const ModalProductDetails :React.FC<ModalProductDetailsProp> = ({ singleProduct }) => {
const ProductSizeArray: string[] = ["M", "L", "Xl"];

const {symbol} = useAppSelector((state)=>state.product)
  return (
    <>
      <h4>{singleProduct.category}</h4>
      <div className="product-price fs-4 mb-3">
        {symbol}{singleProduct.price}
        <del className="f-w-700 fs-5 ms-1">{symbol}{singleProduct.discountPrice}</del>
      </div>
      <div className="product-view product-modal-line">
        <h4 className="f-w-600">{ProductDetails}</h4>
        <p className="mb-0">{singleProduct.description}</p>
      </div>
      <div className="product-size mt-3 mb-2">
        <ul className="d-flex">
          {ProductSizeArray.map((items, i) => (
            <li key={i} className="me-2">
              <Button outline color="light">{items}</Button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
