import { ClickOut, ImagePath } from "@/Constant";
import { useState } from "react";
import { Button, Col } from "reactstrap";
import { CommonRihoModalTitle } from "../Common/CommonRihoModalTitle";
import { ProfileModal } from "./ProfileModal";

export const ModalOne = () => {
  const [modalOne, setModalOne] = useState(false);
  const modalOneTogggle = () => setModalOne(!modalOne);

  return (
    <Col xl="4" md="6" className="custom-alert text-center">
      <div className="card-wrapper border rounded-3 h-100">
        <div className="Riho-demo-img">
          <CommonRihoModalTitle heading="Modal 1 -" subHeading="Profile Modal" text="Example of Mofi dashboard profile card." />
          <div className="overflow-hidden">
            <img className="image-fluid" src={`${ImagePath}/alert/social.png`} alt="social" />
            <Button color="primary" className="mx-auto mt-3" onClick={modalOneTogggle}>{ClickOut}</Button>
          </div>
          <ProfileModal modalOne={modalOne} modalOneTogggle={modalOneTogggle} />
        </div>
      </div>
    </Col>
  );
};
