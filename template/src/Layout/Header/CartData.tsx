import SVG from "@/CommonComponent/SVG";
import { Cart, Checkout, GoToYourCart, Href, ImagePath, OrderTotal } from "@/Constant";
import { cartDetailsList } from "@/Data/Layout";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { X } from "react-feather";
import { Button, Input, InputGroup } from "reactstrap";

export const CartData = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <li className="cart-nav onhover-dropdown">
      <div className="cart-box"><SVG iconId="stroke-ecommerce" /></div>
      <div className="cart-dropdown onhover-show-div">
        <h5 className="f-18 f-w-600 mb-0 dropdown-title">{Cart}</h5>
        <ul>
          {cartDetailsList.map((item, index) => (
            <li key={index}>
              <div className="d-flex">
                <img className="img-fluid b-r-5 me-3 img-60" src={`${ImagePath}/other-images/cart-img.jpg`} alt="" />
                <div className="flex-grow-1">
                  <span className="f-w-600">{item}</span>
                  <div className="qty-box">
                    <InputGroup>
                      <span className="input-group-prepend"><Button className="quantity-left-minus">-</Button></span>
                      <Input className="input-number" type="text" name="quantity" defaultValue="1"/>
                      <span className="input-group-prepend"><Button className="quantity-right-plus">+</Button></span>
                    </InputGroup>
                  </div>
                  <h6 className="font-primary">$500.00</h6>
                </div>
                <div className="close-circle"><Link className="bg-danger" href={Href}><X /></Link></div>
              </div>
            </li>
          ))}
          <li className="total">
            <h6 className="mb-0">{OrderTotal} : <span className="f-w-600 f-right">$1000.00</span></h6>
          </li>
          <li className="text-center">
            <Link className="d-block mb-3 view-cart f-w-700" href={`/${i18LangStatus}/ecommerce/cart`}>{GoToYourCart}</Link>
            <Link href={`/${i18LangStatus}/ecommerce/checkout`}>
              <Button color="primary" className="view-checkout">{Checkout}</Button></Link>
          </li>
        </ul>
      </div>
    </li>
  );
};
