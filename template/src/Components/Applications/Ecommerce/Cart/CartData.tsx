import { Row, Table } from "reactstrap";
import { Href, ImagePath } from "@/Constant";
import EmptyCart from "./EmptyCart";
import { XCircle } from "react-feather";
import { CartTableHead } from "./CartTableHead";
import { CartQuantityButton } from "./CartQuantityButton";
import CartAction from "./CartAction";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { CartType } from "@/Types/EcommerceType";
import { removeCartData } from "@/Redux/Reducers/CartSlice";

export const CartData = () => {
  const dispatch = useAppDispatch();
  const { symbol } = useAppSelector((state) => state.product);
  const { cart } = useAppSelector((state) => state.cartData);
  const removeFromCart = (item: CartType) => dispatch(removeCartData(item.id));

  return (
    <>
      {cart && cart.length > 0 ? (
        <Row>
          <div className="order-history theme-scrollbar table-responsive wishlist">
            <Table className="table-bordered">
              <CartTableHead />
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td><img className="img-fluid img-40" src={`${ImagePath}/ecommerce/${item.image}`} alt={Href} /></td>
                    <td><div className="product-name"><a href={Href}>{item.name}</a></div></td>
                    <td>{symbol}{item.price}</td>
                    <CartQuantityButton item={item} />
                    <td><a href={Href} onClick={() => removeFromCart(item)}><XCircle /></a></td>
                    <td>{symbol}{item.price * item.total}</td>
                  </tr>
                ))}
                <CartAction/>
              </tbody>
            </Table>
          </div>
        </Row>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
