import ConfigDB from "@/Config/ThemeConfig";
import { ImagePath, Pinned } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { scrollToLeft, scrollToRight } from "@/Redux/Reducers/LayoutSlice";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "react-feather";
import SimpleBar from "simplebar-react";
import { LogoWrapper } from "./LogoWrapper";
import SidebarMenuList from "./SideBarMenuList";

export const SideBar = () => {
  const { toggleSidebar, margin } = useAppSelector((state) => state.layout);
  const { pinedMenu } = useAppSelector((state) => state.layout);
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const wrapper = ConfigDB.data.settings.layout_class;
  const dispatch = useAppDispatch();

  return (
    <div className={`sidebar-wrapper ${toggleSidebar ? "close_icon" : ""}`} id="sidebar-wrapper">
      <LogoWrapper />
      <nav className="sidebar-main">
      <div className={`left-arrow ${margin === 0 ? "disabled" : ""}`} onClick={()=>dispatch(scrollToLeft())}><ArrowLeft /></div>
        <div id="sidebar-menu" style={{ position: "inherit", marginLeft: `${wrapper === "horizontal-wrapper" ? margin + "px" : "0px"}` }}>
          <ul className="sidebar-links custom-scrollbar" id="simple-bar">
            <SimpleBar style={{ width: "80px", height: "350px" }}>
              <li className="back-btn">
                <Link href={`/${i18LangStatus}/dashboard/default_dashboard`}>
                  <img className="img-fluid" src={`${ImagePath}/logo/logo-icon.png`} alt="" />
                </Link>
                <div className="mobile-back text-end ">
                  <span>Back </span><i className="fa fa-angle-right ps-2" aria-hidden="true"></i>
                </div>
              </li>
              <li className={`pin-title sidebar-main-title ${pinedMenu.length > 1 ? "show" : ""} `}>
                <div><h6>{Pinned}</h6></div>
              </li>
              <SidebarMenuList />
            </SimpleBar>
          </ul>
        </div>
        <div className={`right-arrow ${margin === -3500 ? "disabled" : ""}`} onClick={()=>dispatch(scrollToRight())}><ArrowRight /></div>
      </nav>
    </div>
  );
};
