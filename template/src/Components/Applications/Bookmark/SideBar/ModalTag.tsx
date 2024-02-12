import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader, Row } from "reactstrap";
import { Cancel, CreateTag, Save, TagColor, TagName } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setTagModal } from "@/Redux/Reducers/BookmarkTabSlice";

const ModalTag = () => {
  const { tagModal } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const tagToggle = () => dispatch(setTagModal());

  return (
    <Modal className="modal-bookmark" size="lg" isOpen={tagModal} toggle={tagToggle}>
      <ModalHeader className="modal-title" toggle={tagToggle}>{CreateTag}</ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation">
          <Row>
            <Col md="12">
              <FormGroup>
                <Label check>{TagName}</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label check>{TagColor}</Label>
                <input type="color" className="d-block form-color" defaultValue="#563d7c" />
              </FormGroup>
            </Col>
          </Row>
          <Button color="secondary" className="me-1" onClick={tagToggle}>{Save}</Button>
          <Button color="primary" onClick={tagToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default ModalTag;
