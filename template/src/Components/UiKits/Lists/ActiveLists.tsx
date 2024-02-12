import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ActiveData, ActiveListData } from "@/Data/Uikits/lists";
import { ActiveList } from "@/Constant";

const ActiveLists = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={ActiveList} span={ActiveData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem className="active bg-warning-light"><i className="icofont icofont-arrow-right"></i>UI Kits</ListGroupItem>
            {ActiveListData.map((item, index) => (
            <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
          ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveLists;
