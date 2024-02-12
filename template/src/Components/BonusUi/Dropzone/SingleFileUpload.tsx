import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { SingleFileUploads } from "@/Constant";
import { FileUploadData } from "@/Data/BonusUi/Dropzone";
import { Card, CardBody, Col } from "reactstrap";
import CommonFileUpload from "./Common/CommonFileUpload";

const SingleFileUpload = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={SingleFileUploads} span={FileUploadData} />
          <CommonFileUpload maxFiles={1} body={true}/>
      </Card>
    </Col>
  );
};

export default SingleFileUpload;
