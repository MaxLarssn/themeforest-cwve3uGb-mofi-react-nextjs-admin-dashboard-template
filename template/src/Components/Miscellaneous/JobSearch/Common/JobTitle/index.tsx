import { useState } from "react";
import { Button, Card, Col, Collapse } from "reactstrap";
import JobTitleCheckBox from "./JobTitleCheckBox";
import HeaderWithIcon from "../HeaderWithIcon";
import { AllJobTitle, JobHeading } from "@/Constant";

const JobTitleClass = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <Col xl="12">
      <Card>
        <HeaderWithIcon heading={JobHeading} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Collapse isOpen={isOpen}>
          <JobTitleCheckBox />
          <Button block className="text-center w-100" color="primary">{AllJobTitle}</Button>
        </Collapse>
      </Card>
    </Col>
  );
};

export default JobTitleClass;
