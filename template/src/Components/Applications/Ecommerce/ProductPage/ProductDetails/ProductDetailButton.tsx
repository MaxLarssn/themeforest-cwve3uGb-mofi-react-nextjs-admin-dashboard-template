import { AddToCart, AddToWishList, BuyNow } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";

export const ProductDetailButton = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div className="m-t-15 btn-showcase">
      <Link className="btn btn-primary" href={`/${i18LangStatus}/ecommerce/cart`} title="">
        <i className="fa fa-shopping-basket me-1"></i>
        {AddToCart}
      </Link>
      <Link className="btn btn-success" href={`/${i18LangStatus}/ecommerce/checkout`} title="">
        <i className="fa fa-shopping-cart me-1"></i>
        {BuyNow}
      </Link>
      <Link className="btn btn-secondary" href={`/${i18LangStatus}/ecommerce/wishlist`}>
        <i className="fa fa-heart me-1"></i>
        {AddToWishList}
      </Link>
    </div>
  );
};
