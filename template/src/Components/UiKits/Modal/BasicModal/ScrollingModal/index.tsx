import WedDesigners from "./WedDesigner";
import { useState } from "react";
import { Button } from "reactstrap";
import { ScrollingContent } from "@/Constant";
import { UXDesigner } from "./UXDesigner";
import CommonModal from "../../Common/CommonModal";

const ScrollingModal = () => {
  const [scrollingModal, setScrollingModal] = useState(false);
  const scrollModaltoggle = () => setScrollingModal(!scrollingModal);
  
  return (
    <>
      <Button color="success" onClick={scrollModaltoggle}>{ScrollingContent}</Button>
      <CommonModal isOpen={scrollingModal} toggle={scrollModaltoggle} title="Scrolling Modal">
        <WedDesigners />
        <UXDesigner />
      </CommonModal>
    </>
  );
};

export default ScrollingModal;
