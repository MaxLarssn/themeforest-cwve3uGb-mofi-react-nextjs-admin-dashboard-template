import { Col } from "reactstrap";
import { Href, SelectSize, SpecialDiscount } from "@/Constant";
import ProductColor from "./ProductColor";
import DealOfTheDay from "./DealOfTheDay";
import Link from "next/link";
import { useAppSelector } from "@/Redux/Hooks";

const ProductDetails = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Col sm="6">
      <div className="product-details my-4">
        <Link href={`/${i18LangStatus}/ecommerce/product_page`}>
          <h4 className="text-truncate">Women’s Fit and Flare Knee length one Piece Dress</h4>
        </Link>
        <h3 className="font-primary">$126</h3>
        <h5>{SelectSize}:</h5>
        <ul className="product-size">
          <li>S </li>
          <li>M </li>
          <li>L </li>
          <li>XL</li>
        </ul>
        <ProductColor />
        <div className="discount-box">
          <h6>{SpecialDiscount} </h6>
        </div>
        <DealOfTheDay />
      </div>
    </Col>
  );
};

export default ProductDetails;
