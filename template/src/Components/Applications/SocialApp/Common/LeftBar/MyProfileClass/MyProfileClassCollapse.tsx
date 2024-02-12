import { ImagePath } from "@/Constant";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import { CardBody, Collapse } from "reactstrap";
import LikesViewButton from "./LikesViewButton";
import MessagesAndNotification from "./MessagesAndNotification";
import SocialGroup from "./SocialGroup";

const MyProfileClassCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="socialprofile filter-cards-view">
        <div className="d-flex">
          <img className="img-50 img-fluid m-r-20 rounded-circle" src={`${ImagePath}/user/1.jpg`} alt="user" />
          <MessagesAndNotification />
        </div>
        <LikesViewButton />
        <div className="likes-profile text-center">
          <h4>
            <span><i className="fa fa-heart font-danger"/> 884</span></h4>
        </div>
        <div className="text-center">35 New Likes This Week</div>
        <div className="customers text-center social-group">
          <SocialGroup />
        </div>
        <img className="img-fluid mt-5" alt="" src={`${ImagePath}/social-app/timeline-3.png`} />                            
      </CardBody>
    </Collapse>
  );
};

export default MyProfileClassCollapse;
