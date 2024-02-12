import { Href, ImagePath, MoreCommnets } from "@/Constant";
import { Card, CardBody, Col } from "reactstrap";
import CommentsBox from "../NewUserClass/CommentsBox";
import IssaBellMessage from "../NewUserClass/IssaBellMessage";
import JasonBorneMessage from "../NewUserClass/JasonBorneMessage";
import LikeContent from "../NewUserClass/LikeContent";
import NewUsersSocial from "../NewUserClass/NewUsersSocial";

const NewUserClass2 = () => {
  return (
    <Col sm="12">
      <Card>
        <CardBody>
          <NewUsersSocial />
          <img className="img-fluid" alt="user12" src={`${ImagePath}/social-app/timeline-2.png`}/>
          <div className="timeline-content">
            <p>The only way to do something in depth is to work hard. I've always thought of the T-shirt as the Alpha of the fashion alphabet. My breakfast is very important. Everything I do is a matter of heart, body and soul.</p>
            <LikeContent />
            <div className="social-chat">
              <JasonBorneMessage />
              <IssaBellMessage />
              <div className="text-center">
                <a href={Href}>{MoreCommnets}</a>
              </div>
            </div>
            <CommentsBox/>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewUserClass2;
