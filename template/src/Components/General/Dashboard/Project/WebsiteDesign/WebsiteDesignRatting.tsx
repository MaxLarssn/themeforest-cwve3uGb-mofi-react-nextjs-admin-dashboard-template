import { WebsiteDesignType } from "@/Types/DashboardType";

const WebsiteDesignRatting :React.FC<WebsiteDesignType>= ({data}) => {
  return (
    <div className="ratting-button">
      {data.ratting.map((item, index) => (
        <div key={index}> 
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
    </div>
  );
};

export default WebsiteDesignRatting;
