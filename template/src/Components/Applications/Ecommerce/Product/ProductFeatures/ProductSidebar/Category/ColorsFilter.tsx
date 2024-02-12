import { Colors } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { getColors } from "@/utils/Ecommerce.service";
import { filterColor } from "@/Redux/Reducers/FilterSlice";
import { MouseEvent } from "react";

const ColorsFilter = () => {
  const { productItem } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const colors = getColors(productItem);

  const colorHandle = (event:MouseEvent<HTMLLIElement>, color: string) => {
    const elem = document.getElementsByClassName("color-selector")[0].getElementsByTagName("li");
    for (let i = 0; i < elem.length; i++) {
      elem[i].classList.remove("active");
    }
    (event.target as Element).classList.add("active");
    dispatch(filterColor(color));
  };

  return (
    <div className="product-filter slider-product">
      <h3 className="f-w-600 mb-2">{Colors}</h3>
      <div className="color-selector">
        <ul className="d-flex flex-row gap-1">
          {colors.map((color, i) => (
              <li className={color} title={color} onClick={(e) => colorHandle(e, color)} key={i}></li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ColorsFilter;