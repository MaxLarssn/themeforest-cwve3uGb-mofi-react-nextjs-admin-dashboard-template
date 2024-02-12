import React, { useState } from "react";
import CommonFullScreenData from "../Common/CommonFullScreenData";
import { FullScreenBelowXXL } from "@/Constant";

const FullScreenBelowXxl = () => {
  const [fullScreenXxl, setFullScreenXxl] = useState(false);
  const fullScreenXxlToggle = () => setFullScreenXxl(!fullScreenXxl);

  return <CommonFullScreenData color="danger-2x" onClick={fullScreenXxlToggle} title={FullScreenBelowXXL} fullscreen="xxl" isOpen={fullScreenXxl} toggle={fullScreenXxlToggle} />;
};

export default FullScreenBelowXxl;
