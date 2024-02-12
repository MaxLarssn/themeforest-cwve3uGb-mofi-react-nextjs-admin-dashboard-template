import { Cancel, Print, PrintViews } from "@/Constant";
import { PrintModalPropsTypes } from "@/Types/ContactType";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { Button, Modal, ModalBody } from "reactstrap";
import PrintPreview from "./PrintPreview";

const PrintModal :React.FC<PrintModalPropsTypes> = ({ printModal, selectedUser, toggleCallback }) => {
  const componentRef = useRef<HTMLDivElement | null>(null);

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  const printModalToggle = () => {
    toggleCallback(false)
    handlePrint()
  };

  const closePrintModal =()=>{
    toggleCallback(false)
  }
  
  return (
    <Modal className="modal-bookmark" isOpen={printModal} toggle={printModalToggle}>
      <div className="modal-header">
        <h3 className="modal-title">{PrintViews}</h3>
        <Button close color="transparent" onClick={printModalToggle}></Button>
      </div>
      <ModalBody className="list-persons">
        <PrintPreview selectedUser={selectedUser} ref={componentRef} />
        <Button color="secondary" className="me-1" onClick={printModalToggle}>{Print}</Button>
        <Button color="primary" onClick={closePrintModal}>{Cancel}</Button>
      </ModalBody>
    </Modal>
  );
};

export default PrintModal;
