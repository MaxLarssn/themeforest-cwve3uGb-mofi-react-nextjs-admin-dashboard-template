import { Href } from "@/Constant";
import { useAppDispatch } from "@/Redux/Hooks";
import { setColView, setListView } from "@/Redux/Reducers/FilterSlice";
import { Grid, List } from "react-feather";

export const GridAndListView = () => {
  const dispatch = useAppDispatch();

  const gridLayout = () => {
    dispatch(setListView(false));
    dispatch(setColView("col-xl-3 col-lg-4 col-sm-6"));
  };

  const listLayout = () => dispatch(setListView(true));

  return (
    <>
      <div className="square-product-setting d-inline-block">
        <a className="icon-grid grid-layout-view" href={Href} onClick={gridLayout}>
          <Grid />
        </a>
      </div>
      <div className="square-product-setting d-inline-block">
        <a className="icon-grid m-0 list-layout-view" href={Href} onClick={listLayout}>
          <List />
        </a>
      </div>
    </>
  );
};
