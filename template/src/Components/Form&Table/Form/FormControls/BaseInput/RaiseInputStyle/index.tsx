import { Button, Card, CardBody, CardFooter, Col, Form } from "reactstrap";
import CommonRaisedInput from "./Common/CommonRaisedInput";
import { RaiseInputStyles, RaisedCancel, RaisedComments, RaisedEmailAddress, RaisedEmailAddressPlaceholder, RaisedPassword, RaisedPasswordPlaceholder, RaisedSelectYourFavoritePixelstrapTheme, RaisedSubmit, SelectTheColorYouLikeBelow } from "@/Constant";
import CommonSelectInput from "../Common/CommonSelectInput";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { RaisedColorDataList, RaisedDataList, RaisedInputStyleData } from "@/Data/Form&Table/Form";

const RaiseInputStyle = () => {
  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={RaiseInputStyles} span={RaisedInputStyleData} />
        <Form className="theme-form dark-inputs">
          <CardBody>
            <CommonRaisedInput inputType="email" label={RaisedEmailAddress} placeholder={RaisedEmailAddressPlaceholder} />
            <CommonRaisedInput inputType="password" label={RaisedPassword} placeholder={RaisedPasswordPlaceholder} />
            <CommonSelectInput label={RaisedSelectYourFavoritePixelstrapTheme} inputClass="input-air-primary" span={RaisedDataList} />
            <CommonSelectInput label={SelectTheColorYouLikeBelow} inputClass="input-air-primary" span={RaisedColorDataList} multiple/>
            <CommonRaisedInput inputType="textarea" label={RaisedComments} rows={4} />
          </CardBody>
          <CardFooter className="text-end">
            <Button color="primary" className="me-3">{RaisedSubmit}</Button>
            <Button color="light" type="reset">{RaisedCancel}</Button>
          </CardFooter>
        </Form>
      </Card>
    </Col>
  );
};

export default RaiseInputStyle;
