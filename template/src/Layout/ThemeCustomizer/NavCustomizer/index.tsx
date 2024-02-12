import { Href, ImagePath, QuickOption } from "@/Constant";
import { NavCustomizerType } from "@/Types/ThemeCustomizerTypes";
import { Nav, NavLink } from "reactstrap";
import NavLinks from "./NavLinks";

const NavCustomizer: React.FC<NavCustomizerType> = ({ callbackNav, selected }) => {
  return (
    <Nav className="flex-column nac-pills">
      <NavLink className={`${selected === "sidebar-type" ? "active" : ""}`} onClick={() => callbackNav("sidebar-type", true)} href={Href}>
        <div className="settings">
          <img src={`${ImagePath}/customizer/color.png`} alt="icons" />
        </div>
        <span>{QuickOption}</span>
      </NavLink>
      <NavLinks />
    </Nav>
  );
};

export default NavCustomizer;
