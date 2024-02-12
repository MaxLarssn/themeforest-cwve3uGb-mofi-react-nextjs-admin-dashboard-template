import { BasicTimeLineDataList } from "@/Data/BonusUi/Timeline";

export const DynamicBasicTimeline = () => {
  return (
    <>
      {BasicTimeLineDataList.map(({ color, date, time, title, span }, index) => (
        <li className="d-flex" key={index}>
          <div className={`timeline-dot-${color}`}></div>
          <div className="w-100 ms-3">
            <p className="d-flex justify-content-between mb-2">
              <span className="date-content light-background">{date}</span>
              <span>{time}</span>
            </p>
            <h6>{title}<span className="dot-notification"></span></h6>
            <p className="f-light">{span}</p>
          </div>
        </li>
      ))}
    </>
  );
};
