import { Categorys, NewProducts, Price } from "@/Constant";
import GenderFilter from "./GenderFilter";
import BrandFilter from "./BrandFilter";
import ColorsFilter from "./ColorsFilter";
import RangeSlider from "./RangeSlider";

export const Category = () => {
  return (
    <>
      <div className="product-filter">
        <h4 className="f-w-600 mb-2">{Categorys}</h4>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className="product-filter pb-0 price-range">
        <h4 className="f-w-600 mb-2">{Price}</h4>
        <RangeSlider />
        <h3 className="f-w-600 mb-2 mt-5">{NewProducts}</h3>
      </div>
    </>
  );
};
