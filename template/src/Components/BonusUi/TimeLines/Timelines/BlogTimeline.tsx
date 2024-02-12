import { BlogTimelineTitle, ImplementedTheProgramForWeeklyCodeChallenges } from "@/Constant";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { Badge } from "reactstrap";

const BlogTimeline = () => {
  const BlogTextTime: string = "help you build problem-solving skills, better understand the programming. ";
  const BlogTime: string = "If you want to improve your skills in programming.";

  return (
    <VerticalTimelineElement className="vertical-timeline-element--work" date="March 12 2023" icon={<i className="icon-youtube"></i>} iconClassName="cd-timeline-img bg-danger">
      <div className="timeline-wrapper">
        <Badge color="danger">{BlogTimelineTitle}</Badge>
      </div>
      <h4 className="m-0 vertical-timeline-element-subtitle">{ImplementedTheProgramForWeeklyCodeChallenges}</h4>
      <p className="mb-0">
        Challenges <em className="txt-danger">{BlogTextTime}</em>{BlogTime}
      </p>
      <div className="ratio ratio-21x9 m-t-20">
        <iframe src="https://www.youtube.com/embed/sqRk0Ly66Ps" title="myFrame" allowFullScreen></iframe>
      </div>
    </VerticalTimelineElement>
  );
};
export default BlogTimeline;
