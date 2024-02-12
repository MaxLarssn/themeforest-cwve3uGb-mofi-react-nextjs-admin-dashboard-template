import { Button, Card, CardBody, Col, Toast, ToastBody } from "reactstrap";
import { useEffect, useState } from "react";
import { Bell } from "react-feather";
import { CommonToast } from "../Common/CommonToast";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { StackingToast } from "@/Constant";
import { StackingToastData, StackingToastDataList } from "@/Data/BonusUi/Toaste";

const StackingToasts = () => {
  const [open, setOpen] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setOpen(false);
    },5000)
  },[])

  return (
    <Col md="6">
      <Card>
        <CommonCardHeader title={StackingToast} span={StackingToastData} />
        <CardBody className="toast-rtl">
          <div className="toast-container position-static">
            <Toast isOpen={open}>
              <div className="toast-header">
                <Bell className="toast-icons toast-primary" />
                <strong className="me-auto">Mofi theme</strong>
                <small className="txt-danger">just now</small>
                <Button close className="p-0" onClick={() => setOpen(false)}></Button>
              </div>
              <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
            </Toast>
            {StackingToastDataList.map((data, index) => (
              <CommonToast item={data} key={index} />
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StackingToasts;
