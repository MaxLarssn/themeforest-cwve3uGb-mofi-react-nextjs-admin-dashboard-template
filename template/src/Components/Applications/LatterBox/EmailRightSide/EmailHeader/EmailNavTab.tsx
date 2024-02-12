import { Nav, NavItem, NavLink } from "reactstrap";
import { Href } from "@/Constant";
import { useState } from "react";
import { EmailNavTabs } from "@/Data/Application/LetterBox";
import SVG from "@/CommonComponent/SVG";

const EmailNavTab = () => {
  const [navId,setNavId] = useState("pills-important-tab")

  return (
    <Nav className="email-tabs" id="email-content-tab">
      {EmailNavTabs.map((data, i) => (
        <NavItem key={i}>
          <NavLink className={navId === data.id ? "active" : ""} id={data.id} href={Href} onClick={()=>setNavId(data.id)} >
            <SVG className="stroke-icon" iconId={data.icon} />
            <span>{data.title} </span>
          </NavLink>
        </NavItem>
      ))}
    </Nav>
  );
};

export default EmailNavTab;
