import SimpleMdeReact from "react-simplemde-editor";
import { Col } from "reactstrap";

const FormEditors = () => {
  const mdeEditorText = `Enter your messages...`;
  
  return (
    <Col xs="12">
      <div id="editor2">
        <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: false, spellChecker: true }}/>
      </div>
      <p className="mt-1 f-light detail-note">{"Improve product visibility by adding a compelling description."}</p>
    </Col>
  );
};

export default FormEditors;
