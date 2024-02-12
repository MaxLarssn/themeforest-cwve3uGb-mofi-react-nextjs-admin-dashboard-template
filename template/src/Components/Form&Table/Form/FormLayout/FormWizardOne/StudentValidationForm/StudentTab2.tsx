import { Col, Input, Label, Row } from "reactstrap";
import { AddProfile, ImagePath, PortfolioURL, ProjectDescription } from "@/Constant";
import { StudentFormPropsType } from "@/Types/FormType";

export const StudentTab2 :React.FC<StudentFormPropsType> = ({ studentValidationForm,  getUserData, fileInputRef, handleImageLabelClick, imageUrl }) => {
  const { portfolioURL, projectDescription } = studentValidationForm;

  return (
      <Row className="g-3 avatar-upload">
        <Col xs="12">
          <div>
            <div className="avatar-edit">
              <Input onChange={getUserData} innerRef={fileInputRef} className="d-none" type="file" accept=".png, .jpg, .jpeg" name="imageUpload" />
              <Label htmlFor="imageUpload" onClick={handleImageLabelClick} check />
            </div>
            <div className="avatar-preview">
              <div id="image" style={{backgroundImage: imageUrl ? `url(${imageUrl})` : `url(${`${ImagePath}/forms/user.png`}`,}} />
            </div>
          </div>
          <h6>{AddProfile}</h6>
        </Col>
        <Col xs="12">
          <Label check>{PortfolioURL}</Label>
          <Input value={portfolioURL} onChange={getUserData} name="portfolioURL" type="url" placeholder="https://mofi" />
        </Col>
        <Col xs="12">
          <Label check>{ProjectDescription}</Label>
          <Input type="textarea" value={projectDescription} onChange={getUserData} name="projectDescription" rows={2} />
        </Col>
      </Row>
  );
};
