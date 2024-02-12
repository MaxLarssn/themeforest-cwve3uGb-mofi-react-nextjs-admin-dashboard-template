import { Col, Form, Input, Label, Row } from "reactstrap";
import { AdditionalDescription, AdditionalTagTitle, MdeEditorText, SpecificTags } from "@/Constant";
import { Typeahead } from "react-bootstrap-typeahead";
import SimpleMdeReact from "react-simplemde-editor";
import { useAppDispatch } from "@/Redux/Hooks";
import { MultiWithHeaderData } from "@/Data/Application/Ecommerce";
import { setFormValue } from "@/Redux/Reducers/AddProductSlice";

const TabTwo = () => {
  const dispatch = useAppDispatch()

  return (
    <div className="meta-body">
      <Form>
        <Row className="g-3">
          <Col xs="12">
            <Row className="g-3">
              <Col sm="6">
                <Row className="custom-input">
                  <Col xs="12">
                    <Label>{AdditionalTagTitle}</Label>
                  </Col>
                  <Col xs="12">
                    <Input type="text" name="additionalTag" onChange={(e)=>dispatch(setFormValue({name:"additionalTag",value:e.target.value}))}/>
                    <p className="f-light"> Add a new tag title. Keywords should be simple and accurate. </p>
                  </Col>
                </Row>
              </Col>
              <Col sm="6">
                <Row className="product-tag">
                  <Col xs="12">
                    <Label>{SpecificTags}</Label>
                  </Col>
                  <Col xs="12">
                    <Typeahead labelKey="name" options={MultiWithHeaderData} multiple clearButton />
                  </Col>
                </Row>
              </Col>
              <Col xs="12">
                <Row>
                  <Col xs="12">
                    <Label> {AdditionalDescription} </Label>
                    <div id="editor4" >
                        <SimpleMdeReact id="editor_container" value={MdeEditorText} options={{ autofocus: false, spellChecker: true }} />
                    </div>
                    <p className="f-light">Enhance your SEO ranking with an added tag description for the product.</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default TabTwo;
