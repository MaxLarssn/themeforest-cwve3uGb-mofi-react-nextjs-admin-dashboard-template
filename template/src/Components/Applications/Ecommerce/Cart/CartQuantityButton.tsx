import { useAppDispatch } from "@/Redux/Hooks";
import { decrementData, incrementData } from "@/Redux/Reducers/CartSlice";
import { CartQuantityButtonProp, CartType } from "@/Types/EcommerceType";
import { Button, Input, InputGroup } from "reactstrap";

export const CartQuantityButton: React.FC<CartQuantityButtonProp> = ({ item }) => {
  const dispatch = useAppDispatch();

  const incrementQty = (product: CartType, quantity: number) => dispatch(incrementData({ item: product, quantity: quantity }));
  const decrementQuantity = (id: number) => dispatch(decrementData(id));

  return (
    <td>
      <fieldset className="qty-box w-50 border-0">
        <InputGroup className="d-flex flex-nowrap">
          <Button color="primary" className="btn-square bootstrap-touchspin-down" onClick={() => decrementQuantity(item.id)}>
            <i className="fa fa-minus"></i>
          </Button>
          <Input className="touchspin text-center" type="text" name="quantity" value={item.total} readOnly />
          <Button color="primary" className="btn-square bootstrap-touchspin-up" onClick={() => incrementQty(item, 1)}>
            <i className="fa fa-plus"></i>
          </Button>
        </InputGroup>
      </fieldset>
    </td>
  );
};
