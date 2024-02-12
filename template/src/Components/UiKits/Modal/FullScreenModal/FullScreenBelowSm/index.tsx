import React, { useState } from "react";
import CommonFullScreenData from "../Common/CommonFullScreenData";
import { FullScreenBelowSM } from "@/Constant";

const FullScreenBelowSm = () => {
  const [fullScreenSm, setFullScreenSm] = useState(false);
  const fullScreenSmToggle = () => setFullScreenSm(!fullScreenSm);
  
  return <CommonFullScreenData color="info-2x" onClick={fullScreenSmToggle} title={FullScreenBelowSM} fullscreen="sm" isOpen={fullScreenSm} toggle={fullScreenSmToggle} />;
};

export default FullScreenBelowSm;
