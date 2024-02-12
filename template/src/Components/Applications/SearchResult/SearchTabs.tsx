import { NavData } from "@/Data/Application/SearchResult";
import { SearchTabsPropsType } from "@/Types/SearchResultType";
import { useState } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";

const SearchTabs :React.FC<SearchTabsPropsType> = ({ callbackActive,activeTabValue }) => {
  const [activeTab, setActiveTab] = useState(activeTabValue);
  
  const handleTab = (id: number | undefined) => {
    if (id) {
      setActiveTab(id);
      callbackActive(id);
    }
  };
  
  return (
    <div className="text-center">
    <Nav tabs className="search-list">
      {NavData.map((data, index) => (
        <NavItem className={data.navItemClass ? data.navItemClass : ""} key={index}> 
          <NavLink className={`${data.textClass ? data.textClass : ""} ${activeTab === index + 1 ? "active" : ""}`} onClick={() => handleTab(data.id)}>
            {data.icon}
            {data.tittle}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
      ))}
    </Nav>
    </div>
  );
};
export default SearchTabs;
