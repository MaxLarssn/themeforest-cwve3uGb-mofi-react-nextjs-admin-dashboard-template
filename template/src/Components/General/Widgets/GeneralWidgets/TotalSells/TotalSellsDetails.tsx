import { TotalSellsDetailsType } from "@/Types/DashboardType";

const TotalSellsDetails: React.FC<TotalSellsDetailsType> = ({ data }) => {
  return (
    <div className="flex-grow-1">
      <div className="d-flex align-items-center gap-2">
        <h2>{data.count}</h2>
        <div className="d-flex total-icon">
          <p className={`mb-0 up-arrow bg-light-${data.color}`}>
            <i className={`fa ${data.icon} text-${data.color}`} />
          </p>
          <span className={`f-w-500 font-${data.color}`}>{data.percentage}</span>
        </div>
      </div>
      <p className="text-truncate">{data.detail}</p>
    </div>
  );
};

export default TotalSellsDetails;
