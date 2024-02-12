import { ImagePath, USMeeting } from "@/Constant";
import { MeetupHoveringList } from "@/Data/BonusUi/Timeline";

export const MeetupHoveringTimeline = () => {
  return (
    <li className="timeline-event">
      <label className="timeline-event-icon" />
      <div className="timeline-event-wrapper">
        <p className="timeline-thumbnail">December 2023 - Meetup</p>
        <h4>{USMeeting}</h4>
        <div className="text-muted">
          2209 Leverton Cove RoadSpringfield, MA 01109
          <div className="designer-details">
            {MeetupHoveringList.map(({ image, name, number }, index) => (
              <div className="designer-profile" key={index}>
                <div className="designer-wrap">
                  <img className="designer-img" src={`${ImagePath}/${image}`} alt="profile" />
                  <div className="designer-content">
                    <h6>{name}</h6>
                    <p>{number}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </li>
  );
};
