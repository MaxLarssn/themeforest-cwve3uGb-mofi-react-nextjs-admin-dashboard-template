import { TabContent, TabPane } from "reactstrap";
import AllTabs from "./AllTabs";
import PhotosTab from "./PhotosTab";
import VideoTabs from "./VideoTab/VideoTabs";
import { SearchTabContentProp } from "@/Types/SearchResultType";

const SearchTabContent :React.FC<SearchTabContentProp> = ({ activeTab }) => {
  return (
    <TabContent activeTab={activeTab}>
      <TabPane tabId={1} className="search-links">
        <AllTabs />
      </TabPane>
      <TabPane tabId={2}>
        <PhotosTab />
      </TabPane>
      <TabPane tabId={3}>
        <VideoTabs />
      </TabPane>
      <TabPane tabId={4}>
      </TabPane>
      <TabPane tabId={5}>
      </TabPane>
    </TabContent>
  );
};

export default SearchTabContent;
