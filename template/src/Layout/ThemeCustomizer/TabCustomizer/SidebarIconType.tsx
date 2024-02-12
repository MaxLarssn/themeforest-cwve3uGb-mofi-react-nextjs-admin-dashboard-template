import { Sidebar_Icon } from '@/Constant';
import StrokeIcon from './StrokeIcon';
import FillIcon from './FillIcon';
import { useAppDispatch } from '@/Redux/Hooks';
import ConfigDB from '@/Config/ThemeConfig';
import { addSidebarIconType } from '@/Redux/Reducers/ThemeCustomizerSlice';

const SidebarIconType = () => {
    const dispatch = useAppDispatch();
    const sideBarIconType = ConfigDB.data.settings.sidebar.iconType;

    const handleSideBarIconType = (type: string) => {
      dispatch(addSidebarIconType(type));
    };

    return (
      <div>
        <h5>{Sidebar_Icon}</h5>
        <ul className="sidebar-type layout-grid">
          <StrokeIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType}/>
          <FillIcon handleSideBarIconType={handleSideBarIconType} sideBarIconType={sideBarIconType}/>
        </ul>
      </div>
    );
}

export default SidebarIconType