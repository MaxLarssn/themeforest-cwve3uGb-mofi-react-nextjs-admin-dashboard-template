import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, ImagePath, ProfileScrollableTitle } from "@/Constant";
import { ProfileScroll, ProfileScrollList } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ProfileScrollable = () => {
  return (
    <Col xxl="4" md="6">
      <Card>
        <CommonCardHeader title={ProfileScrollableTitle} span={ProfileScroll} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none" style={{ width: "100%", height: "300px" }}>
            <ListGroup>
              <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary">
                <img className="rounded-circle" src={`${ImagePath}/user/3.png`} alt="user" />
                Gloria D. Acheson
              </ListGroupItem>
              {ProfileScrollList.map(({ text, src }, index) => (
                <ListGroupItem tag="a" href={Href} className="list-group-item-action list-hover-primary" key={index}>
                  <img className="rounded-circle" src={`${ImagePath}/${src}`} alt="user" />{text}
                </ListGroupItem>
              ))}
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProfileScrollable;
