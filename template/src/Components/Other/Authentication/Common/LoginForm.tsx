import { CreateAccount, DontHaveAccount, EmailAddressLogIn, FacebookIcon, ForgotPassword, ImagePath, LinkedInIcon, OrSignInWith, Password, RememberPassword, SignIn, SignInToAccount, TwitterIcon } from "@/Constant";
import { validationSchema } from "@/Data/Pages";
import { useAppSelector } from "@/Redux/Hooks";
import { LoginFormType, LoginSubmitProp } from "@/Types/AuthType";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Link from "next/link";
import React, { useState } from "react";
import { Facebook, Linkedin, Twitter } from "react-feather";
import { Button, FormGroup, Input, Label } from "reactstrap";

export const LoginForm: React.FC<LoginFormType> = ({ password, logoClass, validation }) => {
  const [show, setShow] = useState(false);
  const submitHandler = (values: LoginSubmitProp, { resetForm }: { resetForm: () => void }) => resetForm();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div>
      <div>
        <Link className={`logo ${logoClass ? logoClass : ""}`} href={`/${i18LangStatus}/dashboard/default_dashboard`}>
          <img className="img-fluid for-light" src={`${ImagePath}/logo/logo.png`} alt="looginpage" />
          <img className="img-fluid for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="looginpage" />
        </Link>
      </div>
      <div className="login-main">
        <Formik initialValues={{ email: "", password: "" }} onSubmit={submitHandler} validationSchema={validation && validationSchema}>
          {() => (
            <Form className="theme-form">
              <h4>{SignInToAccount}</h4>
              <p>Enter your email & password to login</p>
              <FormGroup className="mb-0">
                <Label className="col-form-label">{EmailAddressLogIn}</Label>
                <Field className="form-control" name="email" type="text" placeholder="Test@gmail.com" required />
                <ErrorMessage name="email" component="span" className="pt-1 text-danger" />
              </FormGroup>
              <FormGroup className="mb-0">
                <Label className="col-form-label">{Password}</Label>
                <div className="position-relative">
                  <Field className="form-control" type={show ? "text" : "password"} name="password" required placeholder="*********" />
                  <div className="show-hide" onClick={() => setShow(!show)}><span className="show"> </span></div>
                </div>
                <ErrorMessage name="password" component="span" className="pt-1 text-danger" />
              </FormGroup>
              <FormGroup className="form-group mb-0">
                <div className="checkbox p-0">
                  <Input id="checkbox1" type="checkbox" />
                  <Label className="text-muted" htmlFor="checkbox1">{RememberPassword}</Label>
                </div>
                {password && (<Link className="link" href={`/${i18LangStatus}/others/authentication/forgetpassword`}>{ForgotPassword}?</Link>)}
                <div className="text-end mt-3"><Button color="primary" block className="w-100">{SignIn}</Button></div>
              </FormGroup>
              <h6 className="text-muted mt-4 or">{OrSignInWith}</h6>
              <div className="social mt-4">
                <div className="btn-showcase">
                  <Button tag="a" color="light" href="https://www.linkedin.com/login" target="_blank"><Linkedin className="txt-linkedin" /> {LinkedInIcon}</Button>
                  <Button tag="a" color="light" href="https://twitter.com/login?lang=en" target="_blank"><Twitter className="txt-twitter" />{TwitterIcon}</Button>
                  <Button tag="a" color="light" href="https://www.facebook.com/" target="_blank"><Facebook className="txt-fb" />{FacebookIcon}</Button>
                </div>
              </div>
              <p className="mt-4 mb-0 text-center">{DontHaveAccount}<Link className="ms-2" href={`/${i18LangStatus}/others/authentication/registersimple`}>{CreateAccount}</Link></p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
