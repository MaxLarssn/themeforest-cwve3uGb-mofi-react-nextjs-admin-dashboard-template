import React, { useState } from "react";
import CommonFullScreenData from "../Common/CommonFullScreenData";
import { FullScreenBelowMD } from "@/Constant";

const FullScreenBelowMd = () => {
  const [fullScreenMd, setFullScreenMd] = useState(false);
  const fullScreenMdToggle = () => setFullScreenMd(!fullScreenMd);
  
  return <CommonFullScreenData color="success-2x" onClick={fullScreenMdToggle} title={FullScreenBelowMD} fullscreen="md" isOpen={fullScreenMd} toggle={fullScreenMdToggle} />;
};

export default FullScreenBelowMd;
