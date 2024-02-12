import { Card, CardBody, Col, Row } from "reactstrap";
import { MdeEditorExample } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import SimpleMdeReact from "react-simplemde-editor";

const MdeExampleOne = () => {
  const MdeEditorText = `Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`;

  return (
    <Row>
      <Col sm="12">
        <Card>
          <CommonCardHeader title={MdeEditorExample} />
          <CardBody>
            <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: true, spellChecker: false }} />
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default MdeExampleOne;
