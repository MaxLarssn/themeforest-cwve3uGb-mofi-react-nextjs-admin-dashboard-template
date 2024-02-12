import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Href, ImagePath, ScrollableContents } from "@/Constant";
import { ScrollableContentData } from "@/Data/BonusUi/Scrollable";
import ScrollBar from "react-perfect-scrollbar";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import { DynamicScrollableContent } from "./DynamicScrollableContent";

const ScrollableContent = () => {
  return (
    <Col xxl="4" md="12">
      <Card>
        <CommonCardHeader title={ScrollableContents} span={ScrollableContentData} />
        <CardBody>
          <ScrollBar className="scroll-demo scroll-b-none" style={{ width: "100%", height: "300px" }}>
            <ListGroup className="main-lists-content">
              <ListGroupItem tag="a" className="list-group-item-action active list-hover-primary" href={Href}>
                <div className="list-wrapper gap-0">
                  <img className="list-img" src={`${ImagePath}/user/9.jpg`} alt="profile" />
                  <div className="list-content">
                    <h6>Molly Boake</h6>
                    <p>MollyBoake@rhyta.com</p><small>5 days ago</small></div>
                </div>
              </ListGroupItem>
              <DynamicScrollableContent />
            </ListGroup>
          </ScrollBar>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ScrollableContent;
