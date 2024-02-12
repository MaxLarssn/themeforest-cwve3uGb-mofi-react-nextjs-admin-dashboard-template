import { TourSteps } from "@/Data/BonusUi/Tour";
import { TourProvider } from "@reactour/tour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import TourMain from "./TourMain";

const TourContainer = () => {
  const disableBody = (target: Element | null) => {
    if (target instanceof HTMLElement) disableBodyScroll(target);
  };
  const enableBody = (target: Element | null) => {
    if (target instanceof HTMLElement) enableBodyScroll(target);
  };

  return (
    <TourProvider steps={TourSteps} showPrevNextButtons={true} showCloseButton={true} afterOpen={disableBody} beforeClose={enableBody}>
      <TourMain />
    </TourProvider>
  );
};

export default TourContainer;
