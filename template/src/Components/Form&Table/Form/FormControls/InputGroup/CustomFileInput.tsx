import { Button, Card, CardBody, Col, Input, InputGroup, InputGroupText } from "reactstrap";
import {  CustomFileInputs, CustomFileInputsSubmit, CustomFileInputsUpload, CustomFileInputsVerify,} from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomeFileInputData } from "@/Data/Form&Table/Form";

const CustomFileInput = () => {
  return (
    <Col xl="6">
      <Card className="height-equal">
        <CommonCardHeader title={CustomFileInputs} span={CustomeFileInputData} />
        <CardBody className="main-custom-form input-group-wrapper">
          <InputGroup>
            <InputGroupText htmlFor="inputGroupFile01">{CustomFileInputsUpload}</InputGroupText>
            <Input id="inputGroupFile01" type="file" />
          </InputGroup>
          <InputGroup>
            <Input id="inputGroupFile02" type="file" />
            <InputGroupText htmlFor="inputGroupFile02">{CustomFileInputsVerify}</InputGroupText>
          </InputGroup>
          <InputGroup>
            <Button color='success' id="inputGroupFileAddon03" outline><i className="icofont icofont-ui-copy"></i></Button>
            <Input id="inputGroupFile03" type="file" />
          </InputGroup>
          <InputGroup>
            <Input id="inputGroupFile04" type="file" />
            <Button color='success' id="inputGroupFileAddon04" outline>{CustomFileInputsSubmit}</Button>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  )
};

export default CustomFileInput;
