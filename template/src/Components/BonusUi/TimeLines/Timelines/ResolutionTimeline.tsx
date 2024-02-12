import { MyResolutions, MyResolutionsFor2023, Resolutions } from "@/Constant";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const ResolutionTimeline = () => {
  const ResolutionText: string = "I'm determined to streamline, organism, systematism, realign, and embrace life in 2023.";

  return (
    <VerticalTimelineElement className="vertical-timeline-element--work" date="December 31 2023" icon={<i className="icon-agenda"></i>} iconClassName="cd-timeline-img cd-movie bg-danger">
      <div className="timeline-wrapper">
        <Badge color="warning">{Resolutions}</Badge>
      </div>
      <h4 className="m-0 vertical-timeline-element-subtitle">{MyResolutionsFor2023}</h4>
      <p className="mb-0">{ResolutionText}</p>
      <div className="time-content pt-2">
        <i className="icon-write"></i>
        <h5>{MyResolutions}</h5>
      </div>
    </VerticalTimelineElement>
  );
};
export default ResolutionTimeline;