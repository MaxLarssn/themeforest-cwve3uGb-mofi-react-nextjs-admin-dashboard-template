import { Users } from "react-feather";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row } from "reactstrap";
import { AddContacts, Cancel, Email, FirstName, LastName, Mobile, Name, NewContacts, Phone, Save } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { ContactUsersType } from "@/Types/ContactType";
import { createUser, setContactValidation, setModal } from "@/Redux/Reducers/ContactSlice";

const CreateContact = () => {
  const { modal,contactValidation } = useAppSelector((state) => state.contact);
  const {register,formState: { errors },handleSubmit, reset} = useForm<ContactUsersType>();
  const dispatch = useAppDispatch();
  const toggle = () => dispatch(setModal());

  const AddContact: SubmitHandler<ContactUsersType> = (data) => {
    if (data !== undefined) {
      dispatch(createUser(data));
      dispatch(setModal());
      dispatch(setContactValidation(false));
      reset();
    }
  };

  return (
    <>
      <Button block className="badge-primary w-100 btn-mail" color="primary" onClick={toggle}><Users className="me-2" />{NewContacts}</Button>
      <Modal className="modal-bookmark" isOpen={modal} toggle={toggle} size="lg">
        <div className="modal-header">
          <h3 className="modal-title">{AddContacts}</h3>
          <Button close color="transparent" onClick={toggle}></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
            <Row className="g-2">
              <Col md="12">
                <Row>
                  <Col sm="6">
                    <FormGroup>
                      <Label check>{Name}</Label>
                      <input className={`form-control ${contactValidation && `${errors.name ? "is-invalid" : "is-valid"}`}`} type="text" {...register("name", { required: true })} placeholder={FirstName} />
                    </FormGroup>
                  </Col>                 
                  <Col sm="6">
                    <FormGroup>
                      <Label check>{LastName}</Label>
                      <input className={`form-control ${contactValidation && `${errors.surname ? "is-invalid" : "is-valid"}`}`} type="text" {...register("surname", { required: true })} placeholder={LastName} />
                    </FormGroup>
                  </Col>
                </Row>
              </Col>
              <Col md="12" className="mt-0">
                <Label check>{Email}</Label>
                <input className={`form-control ${contactValidation && `${errors.email ? "is-invalid" : "is-valid"}`}`} type="text" {...register("email", { required: true })} />
              </Col>
              <Col md="12">
                <FormGroup>
                  <Row>
                    <Col sm="6">
                      <Label check>{Phone}</Label>
                      <input className={`form-control ${contactValidation && `${errors.mobile ? "is-invalid" : "is-valid"}`}`} type="number" {...register("mobile", { required: true })} />
                    </Col>
                    <Col sm="6">
                      <Label check>{Mobile}</Label>
                      <select className="form-control">
                        <option value="1">Mobile</option>
                        <option value="2">Work</option>
                        <option value="3">Other</option>
                      </select>
                    </Col>
                  </Row>
              </FormGroup>
              </Col>
            </Row>
            <Button color="secondary" className="me-1" type="submit" onClick={() => dispatch(setContactValidation(true))}>{Save}</Button>
            <Button color="primary" onClick={toggle}>{Cancel}</Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};
export default CreateContact;
