import { ImagePath } from "@/Constant";
import { MutualFriendList } from "@/Data/Application/SocialApp";
import { MyProfileClassCollapseProp } from "@/Types/SocialAppType";
import { CardBody, Collapse } from "reactstrap";

const MutualFriendsCollapse :React.FC<MyProfileClassCollapseProp> = ({ isFilter }) => {
  return (
    <Collapse isOpen={isFilter}>
      <CardBody className="social-status filter-cards-view">
        {MutualFriendList.map((data, index) => (
          <div className="d-flex" key={index}>
            <img className="img-50 rounded-circle m-r-15" src={`${ImagePath}/user/${data.imageName}`} alt="user"/>
            <div className={`social-status ${data.socialClass}`} />
            <div className="flex-grow-1">
              <span className="f-w-600 d-block">{data.title}</span>
              <span className="d-block">{data.email}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Collapse>
  );
};

export default MutualFriendsCollapse;
