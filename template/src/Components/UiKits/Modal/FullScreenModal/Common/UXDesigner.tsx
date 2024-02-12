import { UXDesigners } from "@/Constant";
import { CommonUxList } from "@/Data/Uikits/modal";
import { ArrowRightCircle } from "react-feather";

const UXDesigner = () => {
  return (
    <>
      <h5 className="f-w-600">{UXDesigners}</h5>
      {CommonUxList.map((item, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
          <div className="flex-grow-1 ms-2"><p className="mb-1">{item}</p></div>
        </div>
      ))}
    </>
  )
};

export default UXDesigner;