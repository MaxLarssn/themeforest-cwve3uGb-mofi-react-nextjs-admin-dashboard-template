import { Button, Card, CardBody, Col } from "reactstrap";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OpenFirstModal, ToggleBetweenModal } from "@/Constant";
import CommonModal from "../Common/CommonModal";
import { ToggleParentModal } from "./ToggleParentModal";
import { ToggleModalList } from "@/Data/Uikits/modal";

const ToggleBetweenModals = () => {
  const [modal, setModal] = useState(false);
  const [nestedModal, setNestedModal] = useState(false);
  const [closeAll, setCloseAll] = useState(false);

  const toggle = () => setModal(!modal);

  const toggleNested = () => {
    setNestedModal(!nestedModal);
    setCloseAll(false);
  };

  const toggleAll = () => {
    setNestedModal(!nestedModal);
    setCloseAll(true);
  };
  return (
    <Col xl="4">
      <Card>
        <CommonCardHeader title={ToggleBetweenModal} span={ToggleModalList} />
        <CardBody className="badge-spacing">
          <Button color="dark" onClick={toggle}>{OpenFirstModal}</Button>
          <CommonModal centered isOpen={modal} toggle={toggle}>
            <ToggleParentModal nestedModal={nestedModal} closeAll={closeAll} toggle={toggle} toggleNested={toggleNested} toggleAll={toggleAll}/>
          </CommonModal>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToggleBetweenModals;