import { Sidebar_Type } from "@/Constant";
import Horizontal from "./Horizontal";
import Vertical from "./Vertical";

const SidebarType = () => {
  return (
    <div>
      <h5>{Sidebar_Type}</h5>
      <ul className="sidebar-type layout-grid">
        <Vertical/>
        <Horizontal />
      </ul>
    </div>
  );
};

export default SidebarType;
