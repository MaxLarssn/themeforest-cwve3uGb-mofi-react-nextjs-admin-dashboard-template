import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { HelpCircle } from "react-feather";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LeftBorderAlerts } from "@/Constant";
import { LeftData } from "@/Data/Uikits/alert";

const LeftBorderAlert = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);

  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader title={LeftBorderAlerts} span={LeftData} />
        <CardBody className="live-dark">
          <Alert fade isOpen={visible} color="light-dark" className="text-dark border-left-wrapper" toggle={onDismiss}>
            <HelpCircle />
            <p>You can check in on some of those fields below.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LeftBorderAlert;
