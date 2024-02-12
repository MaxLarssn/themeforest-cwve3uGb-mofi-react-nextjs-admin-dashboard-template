import { Card } from "reactstrap";
import { useState } from "react";
import FollowerCardCollapse from "./FollowerCardCollapase";
import HeaderWithIcon from "../../HeaderWithIcon";
import { Followers } from "@/Constant";

const FollowerCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Followers} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <FollowerCardCollapse isFilter={isOpen} />
    </Card>
  );
};

export default FollowerCard;
