import React from "react";
import { Container, Row } from "reactstrap";
import TotalStudents from "./TotalStudents";
import StudyStatistics from "./StudyStatistics";
import AssignmentsTable from "./AssignmentsTable/AssignmentsTable";
import LiveMeeting from "./LiveMeeting/LiveMeeting";
import ActivelyHours from "./ActivelyHours";
import EnrolledClasses from "./EnrolledClasses";
import FeaturedCourses from "./FeaturedCourses/FeaturedCourses";
import MonthlyAttendance from "./MonthlyAttendance";
import Schedule from "./Schedule";

const EducationContainer = () => {
  return (
    <Container fluid className="dashboard-4">
      <Row>
        <TotalStudents />
        <StudyStatistics />
        <AssignmentsTable />
        <LiveMeeting />
        <ActivelyHours />
        <EnrolledClasses />
        <FeaturedCourses />
        <MonthlyAttendance />
        <Schedule />
      </Row>
    </Container>
  );
};

export default EducationContainer;
