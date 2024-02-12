import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleResponsiveToggle, setToggleSidebar } from "@/Redux/Reducers/LayoutSlice";
import Link from "next/link";

export const LogoWrapper = () => {
  const dispatch = useAppDispatch();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const { sidebarIconType } = useAppSelector((state) => state.themeCustomizer);
  const { toggleSidebar } = useAppSelector((state) => state.layout);

  return (
    <>
      <div className="logo-wrapper">
        <Link href={`/${i18LangStatus}/dashboard/default_dashboard`}>
          <img className="img-fluid" src={`${ImagePath}/logo/logo_light.png`} alt="" />
        </Link>
        <div className="back-btn" onClick={() => dispatch(handleResponsiveToggle())}>
          <i className="fa fa-angle-left"></i>
        </div>
        <div className="toggle-sidebar" onClick={()=>dispatch(setToggleSidebar(!toggleSidebar))} defaultChecked>
          <SVG className={`${sidebarIconType}-icon sidebar-toggle status_toggle middle`} iconId={`${sidebarIconType === "fill" ? "fill-" : "" }toggle-icon`} />
        </div>
      </div>
      <div className="logo-icon-wrapper">
        <Link href={`/${i18LangStatus}/dashboard/default_dashboard`}>
          <img className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} alt="" />
        </Link>
      </div>
    </>
  );
};
