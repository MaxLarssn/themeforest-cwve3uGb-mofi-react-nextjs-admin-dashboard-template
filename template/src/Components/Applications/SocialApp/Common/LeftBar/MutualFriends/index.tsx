import { Card } from "reactstrap";
import { useState } from "react";
import HeaderWithIcon from "../../HeaderWithIcon";
import { MutualFriend } from "@/Constant";
import MutualFriendsCollapse from "./MutualFriendsCollapse";

const MutualFriends = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={MutualFriend} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <MutualFriendsCollapse isFilter={isOpen} />
    </Card>
  );
};

export default MutualFriends;
