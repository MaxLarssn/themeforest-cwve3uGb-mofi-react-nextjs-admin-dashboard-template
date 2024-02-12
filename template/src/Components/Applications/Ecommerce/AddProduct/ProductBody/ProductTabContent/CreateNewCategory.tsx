import { Button, Col, Input, Label, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useState } from "react";
import SimpleMdeReact from "react-simplemde-editor";
import { Add, Cancel, CategoryName, CreateNewCategoryHeading, Href } from "@/Constant";

const CreateNewCategory = () => {
  const mdeEditorText = `Enter your messages...`;
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <Col xs="12">
      <div className="category-buton">
        <Button color="transparent" tag="a" className="button-primary bg-light-primary font-primary" href={Href} onClick={toggle}>
          <i className="me-2 fa fa-plus"> </i>{CreateNewCategoryHeading}
        </Button>
      </div>
      <Modal isOpen={modal} toggle={toggle} size="lg" >
        <div className="modal-header">
          <h1 className="modal-title fs-5">{CreateNewCategoryHeading}</h1>
          <Button close onClick={toggle} />
        </div>
        <ModalBody className="custom-input">
          <div className="create-category">
            <Label for="validationServer01" check>{CategoryName} <span className="txt-danger"> *</span></Label>
            <Input className="m-0" id="validationServer01" type="text" required />
            <div id="editor3" className="mt-2">
              <SimpleMdeReact id="editor_container" value={mdeEditorText} options={{ autofocus: true, spellChecker: false }} />
            </div>
            <p className="f-light">Improve product visibility by adding a compelling description.</p>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="light" onClick={toggle}> {Cancel}</Button>
          <Button color="primary" onClick={toggle}> {Add}</Button>
        </ModalFooter>
      </Modal>
    </Col>
  );
};

export default CreateNewCategory;
