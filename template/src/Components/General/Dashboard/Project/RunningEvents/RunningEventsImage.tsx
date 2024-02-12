import { ImagePath } from "@/Constant";
import { Col } from "reactstrap";

const RunningEventsImage = () => {
  return (
    <Col xs="6" className="running-events">
      <img src={`${ImagePath}/dashboard-2/round.png`} alt="dashboard" />
      <div>
        <img className="running-events-image" src={`${ImagePath}/dashboard-2/events-bg.png`} alt="dashboard"/>
      </div>
    </Col>
  );
};

export default RunningEventsImage;
