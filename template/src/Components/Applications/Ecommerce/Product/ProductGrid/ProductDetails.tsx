import { useAppSelector } from "@/Redux/Hooks";
import { ProductDetailsProp } from "@/Types/EcommerceType";
import Link from "next/link";
import { Rating } from "react-simple-star-rating";

export const ProductDetails :React.FC<ProductDetailsProp> = ({ item }) => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const { symbol } = useAppSelector((state) => state.product);
  return (
    <div className="product-details">
      <Rating fillColor="#ffa800" initialValue={Math.random() * 5} size={17} />
      <Link href={`/${i18LangStatus}/ecommerce/product_page`}>
        <h4>{item.name}</h4>
      </Link>
      <p>{item.note}</p>
      <div className="product-price">{symbol}{item.price}
      <del className="f-w-700">{symbol}{item.discountPrice}</del>
      </div>
    </div>
  );
};
