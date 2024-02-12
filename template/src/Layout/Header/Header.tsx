import { Row } from "reactstrap";
import { MobileView } from "./MobileView";
import { BreadCrumbs } from "./BreadCrumbs";
import { PageHeader } from "./PageHeader";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { headerResponsive } from "@/Redux/Reducers/LayoutSlice";

export const Header = () => {
  const { toggleSidebar } = useAppSelector((state) => state.layout);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(headerResponsive());
  }, []);

  return (
    <Row className={`page-header ${toggleSidebar ? "close_icon" : ""}`} id="page-header">
      <MobileView />
      <BreadCrumbs />
      <PageHeader />
    </Row>
  );
};
