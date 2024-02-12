import { useAppSelector } from "@/Redux/Hooks";
import StarredEmailContent from "./StarredEmailContent";
import { Fragment } from "react";
import { TabPane } from "reactstrap";
import SearchNotFoundClass from "@/Components/Applications/Contact/TabData/SearchNotFoundClass";

const StarredContent = () => {
  const { inboxEmail } = useAppSelector((state) => state.letterBox);
  let starBadges = inboxEmail.filter((data) => data.star === true && 1);

  return (
    <TabPane tabId="3">
      <div className="mail-body-wrapper">
        <ul>
          {starBadges.length > 0 ? (
            inboxEmail.map((data, i) => (
              <Fragment key={i}>
                {data.star && (
                  <li className="inbox-data">
                    <StarredEmailContent data={data} ids={i} />
                  </li>
                )}
              </Fragment>
            ))
          ) : (
            <SearchNotFoundClass word="Email" />
          )}
        </ul>
      </div>
    </TabPane>
  );
};

export default StarredContent;
