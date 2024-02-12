import { Card, CardBody, Col, Table } from "reactstrap";
import { FeaturedCourse } from "@/Constant";
import FeaturedCoursesBody from "./FeaturedCoursesBody";
import DashboardCommonHeader from "../../common/DashboardCommonHeader";

const FeaturedCourses = () => {
  return (
    <Col xxl="5" xl="6" className="box-col-6 proorder-4-xl-1 proorder-md-7">
      <Card>
        <DashboardCommonHeader title={FeaturedCourse} />
        <CardBody className="p-0 featured-table">
          <div className="table-responsive theme-scrollbar dataTables_wrapper">
            <Table className="display my-1 dataTable" id="featured-table">
              <thead>
                <tr>
                  <th>Course Name</th>
                  <th>Start</th>
                  <th>Rate</th>
                  <th>Type</th>
                  <th>Save</th>
                </tr>
              </thead>
              <FeaturedCoursesBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default FeaturedCourses;
