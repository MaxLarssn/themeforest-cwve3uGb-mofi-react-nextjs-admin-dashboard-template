import { Button, Card, CardBody, Col, Input } from "reactstrap";
import { ClipboardOnTextareas, Copy, Cut, CutCopyFromTextarea } from "@/Constant";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CopyToClipboard from "react-copy-to-clipboard";

const ClipboardOnTextarea = () => {
  const clipBoardTextParagraph: string = "A web designer must always enhance their work since creating websites is a creative effort. Therefore, a web designer must be more imaginative to produce exceptional results. Blogs about web design assist web designers in learning about new technologies, offer lessons, news, direction for a freebie, and much more. These blogs allow web designers to stay creative and improve their abilities. Therefore, advice from web design blogs is required to improve your business.";
  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardTextParagraph, copied: false });
  
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={ClipboardOnTextareas} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{CutCopyFromTextarea}</p>
            <Input className="theme-scrollbar" type="textarea" rows={1} spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3 text-end">
              <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <Button className="btn-clipboard me-2" color="warning"><i className="fa fa-copy"></i>{Copy}</Button>
              </CopyToClipboard>
              <CopyToClipboard text={clipBoardValues.value} onCopy={() => setClipBoardValues({ copied: true, value: "" })}>
                <Button className="btn-clipboard-cut" color="success"><i className="fa fa-cut"></i>{Cut}</Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClipboardOnTextarea;
