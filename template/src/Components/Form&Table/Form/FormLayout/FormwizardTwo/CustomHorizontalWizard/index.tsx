import { useCallback, useState } from "react";
import NavComponent from "./NavComponent";
import CustomHorizontalWizardFormTabContent from "./CustomHorizontalWizardFormTabContent";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomWizardFormPropsType } from "@/Types/FormType";

const CustomHorizontalWizard :React.FC<CustomWizardFormPropsType> = ({heading,horizontalWizardClass,xs,firstXl,secondXl,differentId}) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => {
    setActiveTab(tab);
  }, []);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={heading} />        
        <CardBody>
          <div className={`horizontal-wizard-wrapper ${horizontalWizardClass}`}>
            <Row className="g-3">
              <Col xl={firstXl} xs={xs} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xl={secondXl} xs={xs}>
                <CustomHorizontalWizardFormTabContent activeTab={activeTab} callbackActive={callback} differentId={differentId}/>
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomHorizontalWizard;
