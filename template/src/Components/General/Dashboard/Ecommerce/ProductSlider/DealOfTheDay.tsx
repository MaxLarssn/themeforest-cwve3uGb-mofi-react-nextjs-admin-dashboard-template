import Countdown from "react-countdown";
import { Days, DealDayFrom, Hours, Min, Sec } from "@/Constant";
import { DealOfTheDayType } from "@/Types/DashboardType";

const DealOfTheDay = () => {
  const renderer = ({ days, hours, minutes, seconds, completed }: DealOfTheDayType) => {
    if (!completed) {
      return (
        <>
          <h3 className="text-truncate">
            {DealDayFrom}
            <span className="font-secondary"> $48 </span>
          </h3>
          <div className="countdown" id="clock-arrival">
            <ul>
              <li>
                <span className="days time">{days}</span>
                <span className="title">{Days}</span>
              </li>
              <li>
                <span className="hours time">{hours}</span>
                <span className="title">{Hours}</span>
              </li>
              <li className="px-3">
                <span className="minutes time">{minutes}</span>
                <span className="title">{Min}</span>
              </li>
              <li className="px-3">
                <span className="seconds time">{seconds}</span>
                <span className="title">{Sec}</span>
              </li>
            </ul>
          </div>
        </>
      );
    }
  };
  
  var d = new Date();
  var year = d.getFullYear();
  var month = d.getMonth();
  var day = d.getDate();
  var coundown = new Date(year, month, day + 10).getTime();

  return <Countdown date={coundown} renderer={renderer} />;
};

export default DealOfTheDay;
