import { EnterQRCode, ImagePath, ScanQRCode, Submit } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setActive, setModalTwo } from "@/Redux/Reducers/FormLayout/TwoFactorSlice";
import { Button, Form, Input, Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalTwo = () => {
  const {modalTwo,active} = useAppSelector((state)=>state.twoFactor)
  const dispatch = useAppDispatch()

  return (
    <Modal centered isOpen={modalTwo} toggle={()=>dispatch(setModalTwo())}>
      <ModalHeader toggle={()=>dispatch(setModalTwo())}>{ScanQRCode}</ModalHeader>
      <ModalBody className="main-qr-code">
        <div className="modal-toggle-wrapper">
          <p>Scan the QR code using an authenticator app and website such as abc authenticator, OTP xyz, or pqr authenticator. You must input the six-digit code it generates below.</p>
          <div className="modal-img">
            <div className="qr-img">
              <img src={`${ImagePath}/forms/qr-code.png`} alt="qr-code"/>
            </div>
            <div className="qr-content">
              <div className={`alert alert-light-dark light alert-dismissible fade text-dark border-left-wrapper ${ active ? "show" : "d-none"}`} role="alert">
                <i className="fa fa-exclamation-triangle" />
                <div>
                  <span>If your qr code is not working then enter this code in your input field.</span>
                  <span className="f-w-500">TYU78DE29OLAAWCVNTYFGESWQ31098QW</span>
                </div>
                <Button close onClick={() => dispatch(setActive(false))}/>
              </div>
            </div>
          </div>
          <Form onSubmit={(event) => event.preventDefault()} className="needs-validation" noValidate>
            <Input type="text" required placeholder={EnterQRCode} />
          </Form>
          <Button color="primary">{Submit}</Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default ModalTwo;
