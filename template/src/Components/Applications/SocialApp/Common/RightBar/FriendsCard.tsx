import { Friends, ImagePath } from "@/Constant";
import { FriendsImages } from "@/Data/Application/SocialApp";
import { useState } from "react";
import { Card, CardBody, Collapse } from "reactstrap";
import HeaderWithIcon from "../HeaderWithIcon";

const FriendsCard = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={Friends} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <Collapse isOpen={isOpen}>
        <CardBody className="avatar-showcase filter-cards-view">
          {FriendsImages.map((data, index) => (
            <div className="d-inline-block friend-pic" key={index}>
              <img className="img-50 rounded-circle" src={`${ImagePath}/user/${data}`} alt="images"/>
            </div>
          ))}
        </CardBody>
      </Collapse>
    </Card>
  );
};

export default FriendsCard;
