import ColorComponent from './ColorComponent'
import LayoutType from './LayoutType'
import MixLayoutComponent from './MixLayoutComponent'
import SidebarIconType from './SidebarIconType'
import SidebarType from './SidebarType'

const SidebarCustomizer = () => {
  return (
    <>
      <LayoutType />
      <SidebarType />
      <SidebarIconType />
      <ColorComponent />
      <MixLayoutComponent />
    </>
  )
}

export default SidebarCustomizer