import { Href, RecentChats } from "@/Constant";
import React from "react";
import { Button } from "reactstrap";
import ChatUserProfile from "./ChatUserProfile";

export const ChatTabPane = () => {
  return (
    <>
      <div className="common-space">
        <p>{RecentChats}</p>
        <div className="header-top">
          <Button tag="a" color="transparent" className="badge-light-primary f-w-500" href={Href}>
            <i className="fa fa-plus" />
          </Button>
        </div>
      </div>
      <ChatUserProfile />
    </>
  );
};
