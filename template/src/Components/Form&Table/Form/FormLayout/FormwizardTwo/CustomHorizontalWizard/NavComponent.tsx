import { CustomHorizontalData } from "@/Data/Form&Table/Form";
import { BusinessFormCommonProps } from "@/Types/FormType";
import { Nav, NavItem, NavLink } from "reactstrap";

const NavComponent :React.FC<BusinessFormCommonProps> = ({callbackActive,activeTab,}) => {
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      callbackActive(id);
    }
  };
  return (
    <Nav className="nav-pills horizontal-options shipping-options custom-vertical-wizard" id="horizontal-wizard-tab">
      {CustomHorizontalData.map((data, index) => (
        <NavItem key={index} >
          <NavLink
            className={`${activeTab === index + 1 ? "active" : ""}`}
            onClick={() => handleTab(data.activeTab)}>
            <div className="horizontal-wizard">
              <div className="stroke-icon-wizard">
                <i className={`fa ${data.iconName}`} />
              </div>
              <div className="horizontal-wizard-content">
                <h6>{data.title}</h6>
              </div>
            </div>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
