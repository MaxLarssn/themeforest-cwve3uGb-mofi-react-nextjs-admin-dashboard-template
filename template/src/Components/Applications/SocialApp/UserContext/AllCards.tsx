import SVG from "@/CommonComponent/SVG";
import { Followers, Following, ImagePath, Posts } from "@/Constant";
import { SocialUserCardData } from "@/Data/Application/SocialApp";
import { useAppSelector } from "@/Redux/Hooks";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import SocialMediaIcons from "../Common/SocialMediaIcons";

const AllCards = () => {
const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <Fragment>
      {SocialUserCardData.map((item) => (
        <Col sm="6" xxl="3" lg="4" xl="4" className="col-ed-4 box-col-4" key={item.id}>
          <Card className="social-profile">
            <CardBody>
              <div className="social-img-wrap">
                <div className="social-img">
                  <img className="img-fluid" src={`${ImagePath}/${item.avatar}`} alt="user" />
                </div>
                <div className="edit-icon">
                  <SVG iconId="profile-check" />
                </div>
              </div>
              <div className="social-details">
                <h5 className="mb-1"><a href={`/${i18LangStatus}/app/social_app`}>{item.name}</a></h5>
                <span className="f-light">{item.email}</span>
                <SocialMediaIcons />
                <ul className="social-follow">
                  <li>
                    <h5 className="mb-0">{item.totalPost}</h5>
                    <span className="f-light">{Posts}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.follower}</h5>
                    <span className="f-light">{Followers}</span>
                  </li>
                  <li>
                    <h5 className="mb-0">{item.following}</h5>
                    <span className="f-light">{Following}</span>
                  </li>
                </ul>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default AllCards;
