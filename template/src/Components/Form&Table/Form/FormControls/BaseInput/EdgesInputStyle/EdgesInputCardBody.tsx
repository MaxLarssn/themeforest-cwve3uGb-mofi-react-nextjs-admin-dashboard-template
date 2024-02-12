import { CardBody, Col, Input, Label, Row } from "reactstrap";
import { DefaultFileInputExamples, EdgeComments, EdgeDefaultInput, EdgeDefaultInputPlaceholder, EdgeEmailAddress, EdgeEmailAddressPlaceholder, EdgeFemale, EdgeMale, EdgePassword, EdgePasswordPlaceholder, SelectYourFavoritePixelstrapTheme } from "@/Constant";
import CommonEdgeInput from "./Common/CommonEdgeInput";
import CommonSelectInput from "../Common/CommonSelectInput";
import { EdgeDataList } from "@/Data/Form&Table/Form";

export const EdgesInputCardBody = () => {
  return (
    <CardBody>
      <CommonEdgeInput inputType="email" label={EdgeEmailAddress} placeholder={EdgeEmailAddressPlaceholder} />
      <CommonEdgeInput inputType="password" label={EdgePassword} placeholder={EdgePasswordPlaceholder} />
      <CommonSelectInput label={SelectYourFavoritePixelstrapTheme} span={EdgeDataList} inputClass="btn-pill" />
      <CommonEdgeInput inputType="file" label={DefaultFileInputExamples} inputClass="px-4" />
      <CommonEdgeInput inputType="text" label={EdgeDefaultInput} placeholder={EdgeDefaultInputPlaceholder} />
      <Row>
        <Col>
          <div className="mb-3 d-flex gap-3 checkbox-checked">
            <div className="form-check">
              <Input id="flexRadioDefault1" type="radio" name="flexRadioDefault" />
              <Label className=" mb-0" htmlFor="flexRadioDefault1" check>{EdgeMale}</Label>
            </div>
            <div className="form-check">
              <Input id="flexRadioDefault2" type="radio" name="flexRadioDefault" defaultChecked />
              <Label className="mb-0" htmlFor="flexRadioDefault2" check>{EdgeFemale}</Label>
            </div>
          </div>
        </Col>
      </Row>
      <CommonEdgeInput inputType="textarea" label={EdgeComments} rows={3} />
    </CardBody>
  );
};
