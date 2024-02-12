import { Col, FormGroup, Input, Label, Row } from "reactstrap";
import { ContactNumber, Email, EnterNumber, InqMail } from "@/Constant";
import { BankLogoListProp } from "@/Types/FormType";
import { useAppSelector } from "@/Redux/Hooks";

export const InquiryDetails :React.FC<BankLogoListProp> = ({ getUserData,differentId }) => {
  const { inquiresForm } = useAppSelector((state) => state.formWizardTwo);
  const { notifications, email, contactNumber } = inquiresForm;
  const itemsName: string[] = ["Featured Items", "Newsletters", "Notifications", "Blogs"];


  return (
    <Col xs="12" className="inquiries-form">
      <Row>
        <Col md="6">
          <p className="f-w-500">Select the option how you want to receive important notifications.</p>
          <div className="choose-option">
            {itemsName.map((data, index) => (
              <FormGroup check key={index} className="radio radio-primary">
                <Input className="me-2" id={differentId ? data: `${data+index}`} type="radio" name="notifications" onChange={getUserData} checked={notifications === data} value={data} />
                <Label check htmlFor={differentId ? data: `${data+index}`}>{data}</Label>
              </FormGroup>
            ))}
          </div>
        </Col>
        <Col md="6">
          <Row className="g-3">
            <Col xs="12">
              <Label check>{Email}<span className="txt-danger">*</span></Label>
              <Input type="text" placeholder={InqMail} value={email} name="email" onChange={getUserData} />
            </Col>
            <Col xs="12">
              <Label check>{ContactNumber}</Label>
              <Input id="customContact2" type="number" placeholder={EnterNumber} value={contactNumber} name="contactNumber" onChange={getUserData} />
            </Col>
          </Row>
        </Col>
      </Row>
    </Col>
  );
};
