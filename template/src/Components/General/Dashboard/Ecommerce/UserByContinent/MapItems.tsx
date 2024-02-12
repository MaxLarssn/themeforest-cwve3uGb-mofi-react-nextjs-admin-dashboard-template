import { UserContinentData } from "@/Data/General/Dashboard/Ecommerce";

const MapItems = () => {
  return (
    <div className="map-items">
      <ul className="d-flex align-items-center gap-3">
        {UserContinentData.map((data, i) => (
          <li key={i}>
            <h5>
              <span className={`bg-${data.color}`} />
              {data.title}
            </h5>
            <p className="mb-0">{data.number}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MapItems;
