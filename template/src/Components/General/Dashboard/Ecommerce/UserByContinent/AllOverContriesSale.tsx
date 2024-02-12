import { AllOverCountriesSales } from "@/Constant";
import CountriesMap from "./CountriesMap";
import SVG from "@/CommonComponent/SVG";
import { AllOverCountriesData } from "@/Data/General/Dashboard/Ecommerce";

const AllOverCountriesSale = () => {
  return (
    <>
      <div className="contries-sale d-flex gap-4">
        <div className="map-value">
          <h5>{AllOverCountriesSales}</h5>
          <ul>
            {AllOverCountriesData.map((data, i) => (
              <li key={i}>
                <div className="d-flex gap-2">
                  <div className="flex-shrink-0">
                    <SVG className={`fill-${data.color}`} iconId="map-loaction" />
                  </div>
                  <div className="flex-grow-1">
                    <h6>{data.title}</h6>
                  </div>
                  <span>{data.percentage}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <CountriesMap />
      </div>
    </>
  );
};

export default AllOverCountriesSale;
