import { Card } from "reactstrap";
import { useState } from "react";
import ProfileIntroCollapse from "./ProfileIntroCollapse";
import HeaderWithIcon from "../../HeaderWithIcon";
import { ProfileIntro } from "@/Constant";

const ProfileIntroCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={ProfileIntro} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <ProfileIntroCollapse isFilter={isOpen} />
    </Card>
  );
};

export default ProfileIntroCard;
