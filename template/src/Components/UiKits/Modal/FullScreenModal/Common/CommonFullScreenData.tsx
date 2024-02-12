import CommonModal from "../../Common/CommonModal";
import WebDesign from "./WebDesign";
import UXDesigner from "./UXDesigner";
import { Button } from "reactstrap";
import { CommonFullScreenDataType } from "@/Types/UikitsType";

const CommonFullScreenData:React.FC<CommonFullScreenDataType> = ({ color, onClick, title, fullscreen, isOpen, toggle }) => {
  return (
    <>
      <Button outline color={color} onClick={onClick}>{title}</Button>
      <CommonModal fullscreen={fullscreen} modalTitleClassName="fs-5" fullTitle={title} isOpen={isOpen} toggle={toggle} modalBodyClassName="dark-modal">
        <WebDesign />
        <UXDesigner />
      </CommonModal>
    </>
  );
};

export default CommonFullScreenData;
