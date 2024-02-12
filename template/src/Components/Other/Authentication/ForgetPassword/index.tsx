import { AlreadyHaveAnAccount, AuthSignIn, CreateYourPassword, DoneButton, EnterOTP, EnterYourMobileNumber, Href, IfDontReceiveOtpString, ImagePath, NewPassword, RememberPassword, Resend, ResetYourPassword, RetypePassword, Send } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { useState } from "react";
import { Button, Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

const ForgetPasswordContainer = () => {
  const [show, setShow] = useState(false);
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <Container fluid className="p-0">
      <Row>
        <Col sm="12">
          <div className="login-card login-card-main login-dark">
            <div>
              <div>
                <a className="logo" href={`/${i18LangStatus}/dashboard/default_dashboard`}>
                  <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="loginpage" />
                  <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="loginpage" />
                </a>
              </div>
              <div className="login-main">
                <Form className="theme-form" onSubmit={(e)=>e.preventDefault()}>
                  <h4>{ResetYourPassword}</h4>
                  <FormGroup>
                    <Label className="col-form-label">{EnterYourMobileNumber}</Label>
                    <Row>
                      <Col sm="3" className="col-4"><Input type="text" defaultValue="+ 91" /></Col>
                      <Col sm="9" className="col-8"><Input className="mb-1" type="tel" defaultValue="000-000-0000" /></Col>
                      <Col sm="12"><div className="text-end"><Button color="primary" className="m-t-10">{Send}</Button></div></Col>
                    </Row>
                  </FormGroup>
                  <div className="mt-4 mb-4">
                    <span className="reset-password-link">{IfDontReceiveOtpString}?  
                      <Link className="btn-link text-danger" href={Href}>{Resend}</Link>
                    </span>
                  </div>
                  <FormGroup>
                    <Label className="pt-0 col-form-label">{EnterOTP}</Label>
                    <Row>
                      <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                      <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                      <Col><Input className="text-center opt-text" type="text" defaultValue="00" maxLength={2} /></Col>
                    </Row>
                  </FormGroup>
                  <h6 className="mt-4">{CreateYourPassword}</h6>
                  <FormGroup>
                    <Label className="col-form-label">{NewPassword}</Label>
                    <div className="position-relative">
                      <Input className="password-hide" type={show ? "text" : "password"} required placeholder="*********" />
                      <div className="show-hide" onClick={() => setShow(!show)}><span className="show"></span></div>
                    </div>
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label">{RetypePassword}</Label>
                    <Input type="password" className="password-hide" required placeholder="*********" />
                  </FormGroup>
                  <FormGroup className="mb-0">
                    <div className="checkbox p-0">
                      <Input id="checkbox1" type="checkbox" />
                      <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                    </div>
                    <Button block color="primary" className="w-100">{DoneButton}</Button>
                  </FormGroup>
                  <p className="mt-4 mb-0 text-center">{AlreadyHaveAnAccount}
                    <Link className="ms-2" href={`/${i18LangStatus}/others/authentication/loginsimple`}>{AuthSignIn}</Link>
                  </p>
                </Form>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ForgetPasswordContainer;
