import { Button, Col } from "reactstrap";
import { EmailFilter, Href } from "@/Constant";
import { useState } from "react";
import EmailLeftSidebar from "./EmailLeftSidebar";
import { LetterBoxNavType } from "@/Types/LatterBoxType";

const EmailSidebar: React.FC<LetterBoxNavType> = ({ navId, setNavId }) => {
  const [open, setOpen] = useState(false);

  return (
    <Col xxl="3" xl="4" className="box-col-12">
      <div className="md-sidebar">
        <Button color="primary" className="md-sidebar-toggle" href={Href} onClick={() => setOpen(!open)}>{EmailFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${open ? "open" : ""}`}>
          <EmailLeftSidebar navId={navId} setNavId={setNavId} />
        </div>
      </div>
    </Col>
  );
};

export default EmailSidebar;
