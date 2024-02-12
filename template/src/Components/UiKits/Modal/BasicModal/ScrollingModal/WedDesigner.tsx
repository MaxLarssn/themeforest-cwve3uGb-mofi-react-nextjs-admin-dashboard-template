import { WebDesigner } from "@/Constant";
import { ScrollingWebData } from "@/Data/Uikits/modal";
import { ArrowRightCircle } from "react-feather";

const WedDesigners = () => {
  return (
    <>
      <h6>{WebDesigner}</h6>
      <div className="d-flex mt-3">
        <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal" /></div>
        <div className="flex-grow-1 ms-2">
          <p>For a site to be successful, a designer must be able to communicate their ideas, chat with a firm about what they want, and inquire about the target audience.</p>
        </div>
      </div>
      {ScrollingWebData.map(({ text, className }, index) => (
        <div className="d-flex" key={index}>
          <div className="flex-shrink-0"><ArrowRightCircle className="svg-modal" /></div>
          <div className="flex-grow-1 ms-2">
            <p className={className && className}>{text}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default WedDesigners;
