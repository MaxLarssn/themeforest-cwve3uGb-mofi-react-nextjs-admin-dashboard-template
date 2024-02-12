import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addToCartData } from "@/Redux/Reducers/CartSlice";
import { HoverButtonsProp, ProductItemInterface } from "@/Types/EcommerceType";
import { useRouter } from "next/navigation";
import { Button } from "reactstrap";

export const HoverButtons :React.FC<HoverButtonsProp> = ({ item, setDataId, setOpenModal }) => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const dispatch = useAppDispatch();
  const router = useRouter()

  const AddToCarts = (item: ProductItemInterface, quantity: number) => {
    dispatch(addToCartData({ item, quantity }));
    router.push(`/${i18LangStatus}/ecommerce/cart`);
  };

  const onClickHandle = (i: ProductItemInterface) => {
    setOpenModal(true);
    setDataId(i.id);
  };

  return (
    <div className="product-hover">
      <ul>
        <li>
          <Button color="transparent" className="border-0" onClick={() => AddToCarts(item, 1)}>
            <i className="icon-shopping-cart"></i>
          </Button>
        </li>
        <li>
          <Button color="transparent" className="border-0" onClick={() => onClickHandle(item)}>
            <i className="icon-eye"></i>
          </Button>
        </li>
      </ul>
    </div>
  );
};
