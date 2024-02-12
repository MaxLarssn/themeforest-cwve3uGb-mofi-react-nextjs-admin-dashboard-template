import { WebsiteDesignData } from "@/Data/General/Widgets/General";
import { Fragment } from "react";

const WebsiteRatting = () => {
  return (
    <div className="ratting-button">
      {WebsiteDesignData.slice(0, 1).map((data,index) => (
        <Fragment key={index}>
          {data.ratting.map((item, i) => (
            <div key={i}>
              <div className="d-flex align-items-center gap-2 mb-0">
                <div className="flex-shrink-0">
                  <p className="f-w-500">{item.total}</p>
                </div>
                <div className="flex-grow-1">
                  <span className="f-w-500">{item.detail}</span>
                </div>
              </div>
            </div>
          ))}
        </Fragment>
      ))}
    </div>
  );
};

export default WebsiteRatting;
