import { TabContent } from "reactstrap";
import DataLoopTab from "./DataLoopTab";
import FavDataTab from "./FavDataTab";
import CommonTabCard from "../Common/CommonTabCard";
import { Business, Holidays, Important, Newsletter, Notification, Organization, SharedWithMe } from "@/Constant";
import MyBookmarkTab from "./MyBookmarkTab";
import EditBookmarkModal from "./EditBookmark";
import { useAppSelector } from "@/Redux/Hooks";

const BookmarksTabs = () => {
  const { activeTabs } = useAppSelector((state) => state.bookmarkTab);

  return (
    <TabContent activeTab={activeTabs}>
      <DataLoopTab />
      <FavDataTab />
      <CommonTabCard tabId="3" title={SharedWithMe} />
      <MyBookmarkTab />
      <CommonTabCard tabId="5" title={Notification} />
      <CommonTabCard tabId="6" title={Newsletter} />
      <CommonTabCard tabId="7" title={Business} />
      <CommonTabCard tabId="8" title={Holidays} />
      <CommonTabCard tabId="9" title={Important} />
      <CommonTabCard tabId="10" title={Organization} />
      <EditBookmarkModal />
    </TabContent>
  );
};
export default BookmarksTabs;
