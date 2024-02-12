import { Container, Row } from "reactstrap";
import ImagePreview from "./ImagePreview";
import SingleFileUpload from "./SingleFileUpload";
import MultiFileUpload from "./MultiFileUpload";
import DefaultDropzone from "./DefaultDropzone";

const DropzoneContainer = () => {
  return (
    <Container fluid>
      <Row>
        <DefaultDropzone />
        <ImagePreview/>
        <SingleFileUpload/>
        <MultiFileUpload/>
      </Row>
    </Container>
  );
};

export default DropzoneContainer;
