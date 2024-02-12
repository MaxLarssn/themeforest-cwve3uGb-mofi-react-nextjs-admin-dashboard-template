import { useState } from "react";
import { Button, Card, CardBody, Col } from "reactstrap";
import { ClipBoardCopy, CopyHighLightedText, CopyPortionFromParagraphs, HighlightText } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CopyToClipboard from "react-copy-to-clipboard";

const CopyPortionFromParagraph = () => {
  const [highlightTextValue, setHighlightTextValue] = useState({ value: "Web design is the process of creating websites", copied: false });
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader title={CopyPortionFromParagraphs} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">{ClipBoardCopy}</p>
            <h6 className="border rounded card-body f-w-300">
              <span className="bg-primary text-white p-1">{HighlightText}</span>
              that are visible online. Take a website design course to learn how to create an appealing and responsive website. In the discipline of web design, there are degree, diploma, postgraduate degree, and certificate programmes. A web designer is responsible for a website's look, feel, and occasionally even content.
            </h6>
            <div className="mt-3 text-end">
              <CopyToClipboard text={highlightTextValue.value} onCopy={(value) => setHighlightTextValue({ value, copied: true })}>
                <Button className="btn-clipboard" color="secondary">
                  <i className="fa fa-copy"></i> {CopyHighLightedText}
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CopyPortionFromParagraph;
