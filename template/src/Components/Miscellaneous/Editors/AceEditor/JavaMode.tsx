import { Card, CardBody, Col } from "reactstrap";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { JavaModeHeading } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { TypScriptData } from "@/Data/Miscellaneous/Editors";

const JavaMode = () => {
  return (
    <Col lg="6">
      <Card>
        <CommonCardHeader title={JavaModeHeading} />
        <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="java"
            theme="monokai"
            value={TypScriptData}
            name="blah2"
            setOptions={{ useWorker: false }}
            fontSize={14}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          />
        </CardBody>
      </Card>
    </Col>
  );
};
export default JavaMode;
