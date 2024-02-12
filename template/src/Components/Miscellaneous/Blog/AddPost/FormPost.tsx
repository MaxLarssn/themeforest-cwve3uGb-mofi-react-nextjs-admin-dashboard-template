import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import RadioTypeForm from "./RadioTypeForm";
import { Typeahead } from "react-bootstrap-typeahead";
import { BlogPostText, PostCategory, PostContent, PostTitle, PostTitlePlaceholder, PostTypePlaceholder } from "@/Constant";
import { PostTypeData } from "@/Data/Miscellaneous/Blog";
import SimpleMdeReact from "react-simplemde-editor";

export const FormPost = () => {
  return (
    <Form className=" needs-validation">
      <Row>
        <Col sm="12">
          <FormGroup>
            <Label check>{PostTitle}:</Label>
            <Input type="text" placeholder={PostTitlePlaceholder} />
          </FormGroup>
          <RadioTypeForm />
          <FormGroup>
            <div className="col-form-Label">{PostCategory}: <Typeahead id="multiple-typeahead" className="mt-2" defaultSelected={PostTypeData} labelKey="name" multiple options={PostTypeData} placeholder={PostTypePlaceholder} /></div>
          </FormGroup>
          <div className="email-wrapper">
            <div className="theme-form">
              <FormGroup>
                <Label check>{PostContent}:</Label>
                <SimpleMdeReact id="editor_container" value={BlogPostText} options={{ autofocus: true, spellChecker: false }} />
              </FormGroup>
            </div>
          </div>
        </Col>
      </Row>
    </Form>
  );
};
