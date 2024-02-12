import React from "react";
import { Container, Row } from "reactstrap";
import ProjectStatus from "./ProjectStatus";
import RecentProjects from "./RecentProjects";
import TotalProject from "./TotalProject";
import ProjectsOverview from "./ProjectsOverview";
import ClientActivity from "./ClientActivity";
import WebsiteDesign from "./WebsiteDesign";
import TodayTasks from "./TodayTasks";
import RunningEvents from "./RunningEvents";
import OnlineCourseTimeline from "./OnlineCourseTimeline";

const ProjectContainer = () => {
  return (
    <Container fluid className="dashboard-2">
      <Row>
        <ProjectStatus />
        <RecentProjects />
        <TotalProject />
        <ProjectsOverview />
        <ClientActivity />
        <WebsiteDesign />
        <TodayTasks />
        <RunningEvents />
        <OnlineCourseTimeline />
      </Row>
    </Container>
  );
};

export default ProjectContainer;
