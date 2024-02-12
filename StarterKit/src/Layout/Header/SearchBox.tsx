import SVG from "@/CommonComponent/SVG";
import { useAppDispatch } from "@/Redux/Hooks";
import { setResponsiveSearch } from "@/Redux/Reducers/LayoutSlice";

export const SearchBox = () => {
  const dispatch = useAppDispatch()
  
  return (
    <li onClick={()=>dispatch(setResponsiveSearch())}>
      <span className="header-search">
        <SVG iconId="search"/>
      </span>
    </li>
  );
};
