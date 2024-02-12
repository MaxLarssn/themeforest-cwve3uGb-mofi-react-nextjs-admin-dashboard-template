import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader, Row } from "reactstrap";
import { ComposeMessage, FromHeading, Href, SaveAsDraft, Send } from "@/Constant";
import SimpleMdeReact from "react-simplemde-editor";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import EmailSubInput from "./EmailSubInput";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { AddNewEmailInterFace } from "@/Types/LatterBoxType";
import { addNewEmail, setComposeEmail, setEmailValidation } from "@/Redux/Reducers/LetterBoxSlice";
import Link from "next/link";

const ComposeEmailModal = () => {
  const [ccShow,setCcShow] = useState(false);
  const [bccShow,setBccShow] = useState(false)
  const {composeEmail,emailValidation} = useAppSelector((state)=>state.letterBox)
  const dispatch = useAppDispatch();
  const {register,handleSubmit,formState: { errors },reset} = useForm<AddNewEmailInterFace>();

  const onSubmitForm:SubmitHandler<AddNewEmailInterFace> = (data) => {
    dispatch(addNewEmail(data));
    dispatch(setEmailValidation(false));
    dispatch(setComposeEmail(false));
    reset();
  };

  return (
    <Modal isOpen={composeEmail} className={`${composeEmail ? "show" : ""}`} size="lg"  id="compose_mail" >
      <ModalHeader toggle={()=>dispatch(setComposeEmail(false))}> {ComposeMessage} </ModalHeader>
      <ModalBody className="compose-modal">
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(onSubmitForm)}>
          <FormGroup>
            <Row>
              <Col sm="2">
                <Label className="col-form-label" htmlFor="composeFrom" check>{FromHeading} :</Label>
              </Col>
              <Col sm="10">
                <Input id="composeFrom" type="email"/>
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="2">
                <Label className="col-form-label" htmlFor="composeTo" check>To :</Label>
              </Col>
              <Col sm="10">
                <input className={`form-control ${emailValidation && `${errors.userEmail ? "is-invalid":"is-valid"}`}`} type="email" {...register("userEmail", { required: true })} autoComplete="off"/>
                <div className="add-bcc">
                  <div className="d-flex gap-2">
                    <Link className="btn" href={Href} onClick={()=>setCcShow(!ccShow)} > Cc</Link>
                    <Link className="btn" href={Href} onClick={()=>setBccShow(!bccShow)}> Bcc </Link>
                  </div>
                </div>
              </Col>
            </Row>
          </FormGroup>
          <EmailSubInput ccShow={ccShow} bccShow={bccShow} />
          <FormGroup>
            <Row>
              <Col sm="2">
                <Label className="col-form-label" for="composeSubject" check >Subject :</Label>
              </Col>
              <Col sm="10">
                <input className={`form-control ${emailValidation && `${errors.subject ? "is-invalid":"is-valid"}`}`} type="textarea" {...register("subject", { required: true })} autoComplete="off"/>
              </Col>
            </Row>
          </FormGroup>
          <div className="toolbar-box border-0">
            <div id="editor">
              <SimpleMdeReact id="editor_container" placeholder="Enter Your Messages..." options={{ autofocus: true, spellChecker: false }} />
            </div>
          </div>
          <ModalFooter>
            <Button color="light" onClick={()=>dispatch(setComposeEmail(false))}>{SaveAsDraft}</Button>
            <Button color="primary" type="submit" onClick={()=>dispatch(setEmailValidation(true))}>{Send}</Button>
          </ModalFooter>
        </Form>
      </ModalBody>
    </Modal>
  );
};

export default ComposeEmailModal;
