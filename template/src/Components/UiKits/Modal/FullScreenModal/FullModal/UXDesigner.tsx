import { UXDesigners } from "@/Constant";
import { FullScreenUxList } from "@/Data/Uikits/modal";
import { ArrowRightCircle } from "react-feather";

const UXDesigner = () => {
  return (
    <>
      <div className="large-modal-header mt-4">
        <h5 className="f-w-600">{UXDesigners}</h5>
      </div>
      <div className="d-flex mt-2">
        <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
        <div className="flex-grow-1 ms-2">
          <p className="mb-0">User research, persona creation, building wireframes and interactive prototypes, and testing ideas are among the common tasks of a UX designer. These duties can differ greatly between organizations.</p>
        </div>
      </div>
      {FullScreenUxList.map((item, index) => (
        <div className="d-flex mt-2" key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal"/></div>
          <div className="flex-grow-1 ms-2"><p className="mb-0">{item}</p></div>
        </div>
      ))}
    </>
  )
};

export default UXDesigner;
