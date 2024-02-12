import { Call, Href, ImagePath, OtpCode, OtpCodeSent, Resend, VerificationCodeHeading, Verify } from "@/Constant";
import { useState } from "react";
import { Button, Col, Form, Input, Row } from "reactstrap";

const VerificationCode = () => {
  const numbersData: number[] = [1, 2, 3, 4, 5, 6];
  const [val, setVal] = useState(Array(6).fill(undefined));

  const handleChange = (e: string, index: number) => {
    if (e.length > 1) return;
    else {
      const tempt = [...val];
      tempt[index] = parseInt(e);
      setVal(tempt);
    }
  };

  return (
    <Col md="6">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="authenticate">
          <h4>{VerificationCodeHeading}</h4>
          <img className="img-fluid" src={`${ImagePath}/forms/authenticate.png`} alt="authenticate" />
          <span>{OtpCodeSent}</span>
          <span>+91********70</span>
          <Form  onSubmit={(event) => event.preventDefault()}>
            <Row>
              <Col>
                <h5>{OtpCode}</h5>
              </Col>
              <Col className="otp-generate">
                {numbersData.map((data, index) => (
                  <Input key={data} value={val[index]} className="code-input" type="number" onChange={(e) => handleChange(e.target.value, index)} />
                ))}
              </Col>
              <Col>
                <Button color="primary" className="w-100">{Verify}</Button>
              </Col>
              <div>
                <span>Not received your code?</span>
                <span><a href={Href}>{Resend} </a>OR<a href={Href}>{Call}</a></span>
              </div>
            </Row>
          </Form>
        </div>
      </div>
    </Col>
  );
};

export default VerificationCode;
