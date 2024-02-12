import SVG from "@/CommonComponent/SVG";
import { ImagePath } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { handleResponsiveToggle } from "@/Redux/Reducers/LayoutSlice";
import Link from "next/link";
import { Col } from "reactstrap";
export const HeaderLogo = () => {
  const dispatch = useAppDispatch();
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <Col className="header-logo-wrapper p-0">
      <div className="logo-wrapper">
        <Link href={`/${i18LangStatus}/dashboard/default_dashboard`}>
          <img className="img-fluid" src={`${ImagePath}/logo/logo.png`} alt="" />
        </Link>
      </div>
      <div className="toggle-sidebar" onClick={()=>dispatch(handleResponsiveToggle())}>
        <SVG className="stroke-icon sidebar-toggle status_toggle middle" iconId="toggle-icon" />
      </div>
    </Col>
  );
};