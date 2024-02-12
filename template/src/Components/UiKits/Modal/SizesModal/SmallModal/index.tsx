import { SmallModals } from "@/Constant";
import React, { Fragment, useState } from "react";
import { ChevronsRight } from "react-feather";
import { Button } from "reactstrap";
import CommonModal from "../../Common/CommonModal";
import { SmallData } from "@/Data/Uikits/modal";

const SmallModal = () => {
  const [smallScreen, setSmallScreen] = useState(false);
  const smallScreenToggle = () => setSmallScreen(!smallScreen);

  return (
    <>
      <Button color="primary" onClick={smallScreenToggle}>{SmallModals}</Button>
      <CommonModal size="sm" isOpen={smallScreen} toggle={smallScreenToggle} sizeTitle="Small modal" modalBodyClassName="dark-modal">
        <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">Web Design </h5></div>
        <p className="modal-padding-space mb-2">We build specialised websites for companies, list them on digital directories, and set up a sales funnel to boost ROI.</p>
        {SmallData.map(({ title, text }, index) => (
          <Fragment key={index}>
            <div className="large-modal-header"><ChevronsRight /><h5 className="f-w-600">{title}</h5></div>
            <p className="modal-padding-space">{text}</p>
          </Fragment>
        ))}
      </CommonModal>
    </>
  );
};

export default SmallModal;
