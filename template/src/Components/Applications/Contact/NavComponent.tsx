import { Nav, NavItem } from "reactstrap";
import { useState } from "react";
import { Href, Views } from "@/Constant";
import CreateContact from "./CreateContact";
import CategoryCreate from "./CategoryCreate";
import { ContactNavPropsType } from "@/Types/ContactType";
import { SideBarData } from "@/Data/Application/Contacts";

const NavComponent :React.FC<ContactNavPropsType> = ({ callbackActive }) => {
  const [activeTab, setActiveTab] = useState("1");
  
  const activeTabHandler=(value:string)=>{
    setActiveTab(value)
    callbackActive(value)
  }

  return (
    <Nav className="main-menu contact-options" role="tablist">
      <NavItem><CreateContact /></NavItem>
      <NavItem><span className="main-title">{Views}</span></NavItem>
      <NavItem><a href={Href} className={activeTab === "1" ? "active" : ""} onClick={() => { setActiveTab("1"); callbackActive("1")}}><span className="title">Personal</span></a></NavItem>
      <NavItem><CategoryCreate /></NavItem>
      {SideBarData.map((data, index) => (
        <NavItem key={index}>
          <a href={Href} className={activeTab === data.value ? "active" : ""} onClick={() => activeTabHandler(data.value)}>
            <span className="title">{data.tittle}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavComponent;
