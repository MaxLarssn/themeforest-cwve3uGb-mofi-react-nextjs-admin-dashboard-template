import { Card } from "reactstrap";
import { useState } from "react";
import HeaderWithIcon from "../../HeaderWithIcon";
import { MyProfile } from "@/Constant";
import MyProfileClassCollapse from "./MyProfileClassCollapse";

const MyProfileClass = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
      <Card>
        <HeaderWithIcon Heading={MyProfile} isOpen={isOpen} setIsOpen={setIsOpen}/>
        <MyProfileClassCollapse isFilter={isOpen}  />
      </Card>
  );
};

export default MyProfileClass;
