import { AddToCartButton, ViewDetails } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addToCartData } from "@/Redux/Reducers/CartSlice";
import { ModalButtonsProp, ProductItemInterface } from "@/Types/EcommerceType";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const ModalButtons :React.FC<ModalButtonsProp> = ({ singleProduct, quantity }) => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const dispatch = useAppDispatch();
const router = useRouter();

  const AddToCarts = (item: ProductItemInterface) => {
    dispatch(addToCartData({ item, quantity }));
    router.push(`/${i18LangStatus}/ecommerce/cart`);
  };
    
  return (
    <div className="addcart-btn">
      <Link href={`/${i18LangStatus}/ecommerce/cart`} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct)}>
        {AddToCartButton}
      </Link>
      <Link href={`/${i18LangStatus}/ecommerce/product_page`} className="btn btn-primary text-white">
        {ViewDetails}
      </Link>
    </div>
  );
};
