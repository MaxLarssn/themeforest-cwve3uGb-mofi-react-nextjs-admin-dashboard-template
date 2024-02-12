import React, { useState } from "react";
import { Alert, Button, Card, CardBody, Col } from "reactstrap";
import { Bell } from "react-feather";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DismissingLightAlert } from "@/Constant";
import { DismissingLightData } from "@/Data/Uikits/alert";

const DismissingLightAlerts = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader title={DismissingLightAlert} span={DismissingLightData} />
        <CardBody>
          <Alert fade color="warning" isOpen={visible} toggle={onDismiss}>
            <Bell />
            <p>Hidden content You should check in on some of those fields below.</p>
          </Alert>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingLightAlerts;
