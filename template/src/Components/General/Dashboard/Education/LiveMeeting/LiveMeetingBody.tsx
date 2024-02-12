import { ImagePath } from "@/Constant";

const LiveMeetingBody = () => {
  const LiveMeetingData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <div className="live-metting">
      <img className="img-fluid" src={`${ImagePath}/dashboard-4/metting/teacher.png`} alt="teacher" />
      <div className="star-img">
        <img className="img-fluid" src={`${ImagePath}/dashboard-4/metting/chart.png`} alt="chart" />
        <img className="img-fluid" src={`${ImagePath}/dashboard-4/metting/message.png`} alt="message" />
        {LiveMeetingData.map((data, i) => (
          <img src={`${ImagePath}/dashboard-4/metting/${data}.png`} alt="metting" key={i} />
        ))}
      </div>
    </div>
  );
};

export default LiveMeetingBody;
