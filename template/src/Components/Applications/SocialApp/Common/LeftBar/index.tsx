import { Fragment } from "react";
import ActivityFeedClass from "./ActivityFeedClass";
import MutualFriends from "./MutualFriends";
import MyProfileClass from "./MyProfileClass";

const LeftBar = () => {
  return (
    <Fragment>
        <MyProfileClass />
        <MutualFriends />
        <ActivityFeedClass /> 
    </Fragment>
  );
};

export default LeftBar;
