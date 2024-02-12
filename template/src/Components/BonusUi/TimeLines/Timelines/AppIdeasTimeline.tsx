import { AppIdeas, EstablishedNewTheAppIdeaRepository, ViewItOnGithub } from "@/Constant";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const AppIdeasTimeline = () => {
  const AppIdeaText: string = "developers who are just beginning their learning process. those who often concentrate on developing programmes with a user interface.";

  return (
    <VerticalTimelineElement className="vertical-timeline-element--work" date="February 02 2023" icon={<i className="icon-pencil-alt"></i>} iconClassName="cd-timeline-img cd-picture bg-primary">
      <div className="timeline-wrapper">
        <Badge color="warning">{AppIdeas}</Badge>
      </div>
      <h4 className="m-0 vertical-timeline-element-subtitle">{EstablishedNewTheAppIdeaRepository}</h4>
      <p className="mb-0">{AppIdeaText}</p>
      <div className="time-content pt-2">
        <i className="icon-github"></i>
        <h5>{ViewItOnGithub}</h5>
      </div>
    </VerticalTimelineElement>
  );
};
export default AppIdeasTimeline;
