import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DefaultList } from "@/Constant";
import { DefaultData, DefaultListData } from "@/Data/Uikits/lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const DefaultLists = () => {
  return (
    <Col xl="4" md="6">
      <Card>
        <CommonCardHeader title={DefaultList} span={DefaultData} />
        <CardBody>
          <ListGroup>
            <ListGroupItem><i className="icofont icofont-arrow-right"></i>Logo Design</ListGroupItem>
            {DefaultListData.map((item, index) => (
              <ListGroupItem key={index}><i className="icofont icofont-arrow-right"></i>{item}</ListGroupItem>
            ))}
          </ListGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
