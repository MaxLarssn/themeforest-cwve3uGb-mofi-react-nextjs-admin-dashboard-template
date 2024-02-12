import SVG from "@/CommonComponent/SVG";
import { Previous } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setNavId, setTabId } from "@/Redux/Reducers/AddProductSlice";
import { Button } from "reactstrap";

const CommonButton = () => {
  const {navId,formValue,tabId} = useAppSelector((state) => state.addProduct)
  const dispatch = useAppDispatch()

  const handleFormValue = () => {
    if(formValue.userName !== "") dispatch(setNavId(2))
    if(formValue.fileName !== "" && formValue.fileName1 !== "") dispatch(setNavId(3))
    if(formValue.category !== "" && formValue.status !== "") dispatch(setNavId(4))
    if(formValue.initialCost !== "" && formValue.initialPrice !== "" && formValue.select !== "" && formValue.productStocks !== "") dispatch(setNavId(5))
    if(formValue.stock !== "" && formValue.lowStock !== "" && formValue.sku !== "" && formValue.quantity !== "" && formValue.restock !== "") dispatch(setTabId(2))
    if(formValue.additionalTag !== "") dispatch(setTabId(3))
  }

  const handlePrevious = () => {
    if(navId > 1){
      if(tabId > 1){
        dispatch(setTabId(tabId-1))
      }else{
        dispatch(setNavId(navId-1))
      }
    }
  }

  return (
    <div className="product-buttons border-0">
      {navId > 1 &&
        <Button color="transparent" onClick={()=>handlePrevious()}>
          <div className="d-flex align-items-center gap-sm-2 gap-1">
            <SVG iconId="back-arrow"/>{Previous}</div>
        </Button>
      }
      <Button color="transparent" className="ms-2" onClick={()=>handleFormValue()}>
        <div className="d-flex align-items-center gap-sm-2 gap-1">{tabId === 3 ? "Submit" : "Next"}
          <SVG iconId="front-arrow" />
        </div>
      </Button>
    </div>
  );
};

export default CommonButton;
