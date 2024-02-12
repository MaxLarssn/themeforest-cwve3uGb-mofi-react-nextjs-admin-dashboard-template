import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Label, Modal, ModalBody, Row } from "reactstrap";
import { AddBookmark, Cancel, Collection, Description, Group, Save, Title, WebUrl } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewBookmark, setAddModal, setBookmarkValidation } from "@/Redux/Reducers/BookmarkTabSlice";
import { AddNewBookMarkInterFace } from "@/Types/BookmarkType";

const BookmarkModal = () => {
  const { addModal,bookmarkValidation } = useAppSelector((state) => state.bookmarkTab);
  const dispatch = useAppDispatch();
  const addToggle = () => dispatch(setAddModal());
  const {register,handleSubmit,formState: { errors },reset,} = useForm<AddNewBookMarkInterFace>();

  const onSubmit:SubmitHandler<AddNewBookMarkInterFace> = (data) => {
    dispatch(addNewBookmark(data));
    dispatch(setBookmarkValidation(false));
    dispatch(setAddModal());
    reset();
  };

  return (
    <Modal fade isOpen={addModal} toggle={addToggle} size="lg" className="modal-bookmark">
      <div className="modal-header">
        <h3 className="modal-title">{AddBookmark}</h3>
        <Button close color="transparent" onClick={addToggle}></Button>
      </div>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmit)}>
          <Row>
            <Col md="12">
              <FormGroup>
                <Label check>{WebUrl}</Label>
                <input className={`form-control ${bookmarkValidation && `${errors.url ? "is-invalid":"is-valid"}`}`} type="text" {...register("url", { required: true })} autoComplete="off" />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup>
                <Label check>{Title}</Label>
                <input className={`form-control ${bookmarkValidation && `${errors.title ? "is-invalid":"is-valid"}`}`} type="text" {...register("title", { required: true })} autoComplete="off"/>
              </FormGroup>
            </Col>
            <Col md="12">
            <FormGroup>
              <Label check>{Description}</Label>
              <input className={`form-control ${bookmarkValidation && `${errors.desc ? "is-invalid":"is-valid"}`}`} type="textarea" {...register("desc", { required: true })} autoComplete="off"/>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label check>{Group}</Label>
                <select name="group" className="form-control js-example-basic-single">
                  <option value="My Bookmark">My Bookmarks</option>
                </select>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label check>{Collection}</Label>
                <select name="collection" className="form-control js-example-disabled-results">
                  <option value="General">General</option>
                  <option value="Fs">Fs</option>
                </select>
              </FormGroup>
            </Col>
          </Row>
          <Button color="secondary" className="me-1" type="submit" onClick={()=>dispatch(setBookmarkValidation(true))}>{Save}</Button>
          <Button color="primary" onClick={addToggle}>{Cancel}</Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default BookmarkModal;
