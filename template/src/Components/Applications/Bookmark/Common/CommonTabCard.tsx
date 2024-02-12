import { Card, CardBody, CardHeader, TabPane } from "reactstrap";
import { NoBookmarksFound } from "@/Constant";
import { CommonTabCardProp } from "@/Types/BookmarkType";
import ViewBookmark from "../ViewBookmarks";
import SearchNotFoundClass from "../../Contact/TabData/SearchNotFoundClass";

const CommonTabCard :React.FC<CommonTabCardProp> = ({ tabId, title }) => {
  return (
    <TabPane tabId={tabId}>
      <Card className="mb-0">
        <CardHeader className="d-flex">
          <h4 className="mb-0">{title}</h4>
          <ViewBookmark />
        </CardHeader>
        <CardBody>
          <SearchNotFoundClass word="Bookmark"/>
        </CardBody>
      </Card>
    </TabPane>
  );
};

export default CommonTabCard;
