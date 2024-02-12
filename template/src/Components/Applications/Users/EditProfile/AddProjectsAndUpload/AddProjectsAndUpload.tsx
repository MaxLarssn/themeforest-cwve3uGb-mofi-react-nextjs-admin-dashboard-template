import { Card, Col, Table } from "reactstrap";
import AddProjectsAndUploadTableBody from "./AddProjectsAndUploadTableBody";
import { AddProjectAndUpload } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";

const AddProjectsAndUpload = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={AddProjectAndUpload} />
        <div className="table-responsive theme-scrollbar">
          <Table className="card-table table-vcenter text-nowrap">
            <thead>
              <tr>
                <th>ProjectName</th>
                <th>Date</th>
                <th>Status</th>
                <th>Price</th>
                <th />
              </tr>
            </thead>
            <AddProjectsAndUploadTableBody />
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default AddProjectsAndUpload;
