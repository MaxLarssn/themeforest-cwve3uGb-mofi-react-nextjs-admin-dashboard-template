import { ImagePath, TopRightToasts } from "@/Constant";
import { useState } from "react";
import { Button, Toast, ToastBody } from "reactstrap";

const TopRightToast = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(true);
    setTimeout(() => {
      setOpen(false);
    }, 3000);
  };

  return (
    <>
      <Button color="primary" onClick={toggle}>{TopRightToasts}</Button>
      <div className="toast-container position-fixed top-0 end-0 p-3 toast-index toast-rtl">
        <Toast fade isOpen={open}>
          <div className="toast-header toast-img">
            <img className="rounded me-2" src={`${ImagePath}/other-images/profile.png`} alt="profile" />
            <strong className="me-auto">Mofi theme</strong>
            <small>5 min ago</small>
            <Button  close onClick={() => setOpen(false)}></Button>
          </div>
          <ToastBody className="toast-dark">Hello, I'm a web-designer.</ToastBody>
        </Toast>
      </div>
    </>
  );
};

export default TopRightToast;
