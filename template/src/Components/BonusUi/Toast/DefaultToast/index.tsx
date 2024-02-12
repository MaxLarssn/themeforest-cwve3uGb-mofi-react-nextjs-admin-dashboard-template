import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultToasts, ImagePath } from "@/Constant";
import { DefaultToastData } from "@/Data/BonusUi/Toaste";
import { useState } from "react";
import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";

const DefaultToast = () => {
  const [open, setOpen] = useState(true);

  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DefaultToasts} span={DefaultToastData} />
        <CardBody className="toast-rtl">
          <Toast className="default-show-toast" isOpen={open}>
            <div className="toast-header toast-img">
              <img className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
              <strong className="me-auto">Mofi theme</strong>
              <small className="d-sm-block d-none">10 min ago</small>
              <Button close className="p-0" onClick={() => setOpen(false)}></Button>
            </div>
            <ToastBody className="toast-dark"><strong className="txt-success">Well done!</strong> You successfully read this important message.</ToastBody>
          </Toast>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultToast;
