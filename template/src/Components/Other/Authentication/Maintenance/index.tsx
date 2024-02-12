import { BackToHomePage, MaintenancesSubContent, MaintenancesTitle, ThankYouForPatience } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Button, Container } from "reactstrap";

const MaintenanceContainer = () => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div className="page-wrapper">
      <div className="error-wrapper maintenance-bg">
        <Container>
          <ul className="maintenance-icons">
            <li><i className="fa fa-cog"></i></li>
            <li><i className="fa fa-cog"></i></li>
            <li><i className="fa fa-cog"></i></li>
          </ul>
          <div className="maintenance-heading">
            <h2 className="headline">{MaintenancesTitle}</h2>
          </div>
          <h4 className="sub-content">{MaintenancesSubContent}<br />{ThankYouForPatience}</h4>
          <div>
            <Button tag="a" color="primary" size="lg" className="btn-primary-gradien text-light" href={`/${i18LangStatus}/dashboard/default_dashboard`}>{BackToHomePage}</Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default MaintenanceContainer;
