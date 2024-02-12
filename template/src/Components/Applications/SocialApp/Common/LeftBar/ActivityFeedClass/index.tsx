import { useState } from "react";
import { Card } from "reactstrap";
import ActivityFeedCollapse from "./ActivityFeedCollapase";
import HeaderWithIcon from "../../HeaderWithIcon";
import { ActivityFeed } from "@/Constant";

const ActivityFeedClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={ActivityFeed} isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActivityFeedCollapse isFilter={isOpen}/>
    </Card>
  );
};

export default ActivityFeedClass;
