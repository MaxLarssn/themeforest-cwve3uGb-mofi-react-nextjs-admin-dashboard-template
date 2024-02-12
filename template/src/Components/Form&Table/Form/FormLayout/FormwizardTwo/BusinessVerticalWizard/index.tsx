import { useCallback, useState } from "react";
import NavComponent from "./NavComponent";
import BusinessVerticalWizardTabContent from "./BusinessVerticalWizardTabContent";
import { Card, CardBody, Col, Row } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BusinessFormpropsType } from "@/Types/FormType";

const BusinessVerticalWizard :React.FC<BusinessFormpropsType> = ({ heading, firstXl, secondXl, xs, horizontalWizardClass }) => {
  const [activeTab, setActiveTab] = useState<number | undefined>(1);
  const callback = useCallback((tab: number | undefined) => setActiveTab(tab), []);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={heading} headClass="mb-2" />
        <CardBody>
          <div className={`horizontal-wizard-wrapper  vertical-variations ${horizontalWizardClass ? horizontalWizardClass : ""}`}>
            <Row className="g-3">
              <Col xs={xs} xl={firstXl} className="main-horizontal-header">
                <NavComponent callbackActive={callback} activeTab={activeTab} />
              </Col>
              <Col xs={xs} xl={secondXl}>
                <BusinessVerticalWizardTabContent activeTab={activeTab} callbackActive={callback} />
              </Col>
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BusinessVerticalWizard;
