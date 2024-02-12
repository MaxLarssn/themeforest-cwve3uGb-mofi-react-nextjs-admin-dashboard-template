import { CardBody, Col, Input, Label, Row } from "reactstrap";
import { BasicColorPicker, BasicDatalistExample, BasicDate, BasicDateAndTime, BasicMaximumLength, BasicMonth, BasicNumber, BasicPassword, BasicPlaceholder, BasicPlaceholderPlace, BasicStaticText, BasicTelephone, BasicTelephonePlaceholder, BasicTime, BasicWeek, FullDate, FullDateAndTime, FullMonth, FullWeek, ListPlaceholder, MaximumLengthPlaceholder, NumberPlaceholder, PasswordInputPlaceholder, StaticTextData, URLs, URLsValue } from "@/Constant";
import CommonFormGroup from "./Common/CommonFormGroup";
import { DataInputList } from "@/Data/Form&Table/Form";

export const BasicHtmlCardBody = () => {
  return (
    <CardBody className="custom-input">
      <Row>
        <Col>
          <CommonFormGroup inputType="text" label={BasicPlaceholder} colSm="9" placeholder={BasicPlaceholderPlace} />
          <CommonFormGroup inputType="text" label={BasicPassword} colSm="9" placeholder={PasswordInputPlaceholder} />
          <CommonFormGroup inputType="number" label={BasicNumber} colSm="9" placeholder={NumberPlaceholder} />
          <CommonFormGroup inputType="tel" label={BasicTelephone} colSm="9" defaultValue={BasicTelephonePlaceholder} />
          <CommonFormGroup inputType="url" label={URLs} colSm="9" defaultValue={URLsValue} />
          <CommonFormGroup inputType="datetime-local" label={BasicDateAndTime} colSm="9" inputClass="digits" defaultValue={FullDateAndTime} />
          <CommonFormGroup inputType="date" label={BasicDate} colSm="9" inputClass="digits" defaultValue={FullDate} />
          <CommonFormGroup inputType="month" label={BasicMonth} colSm="9" inputClass="digits" defaultValue={FullMonth} />
          <CommonFormGroup inputType="week" label={BasicWeek} colSm="3" inputClass="digits" defaultValue={FullWeek} />
          <Row className="mb-3">
            <Col sm="3"><Label check>{BasicDatalistExample}</Label></Col>
            <Col sm="9">
              <Input list="datalistOptions" placeholder={ListPlaceholder} />
              <datalist id="datalistOptions">{DataInputList.map((item, index) => (<option value={item} key={index}></option>))}</datalist>
            </Col>
          </Row>
          <CommonFormGroup inputType="time" label={BasicTime} colSm="3" inputClass="digits" />
          <CommonFormGroup inputType="color" colSm="2" label={BasicColorPicker} labelClass="pt-0" inputClass="form-control-color" defaultValue="#563d7c" />
          <CommonFormGroup inputType="text" colSm="9" label={BasicMaximumLength} placeholder={MaximumLengthPlaceholder} max="6" />
          <Row>
            <Label className="col-sm-3" check>{BasicStaticText}</Label>
            <Col sm="9"><div className="form-control-static">{StaticTextData}</div></Col>
          </Row>
        </Col>
      </Row>
    </CardBody>
  );
};
