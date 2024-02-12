import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ListsWithNumber } from "@/Constant";
import { ListNumberData, ListNumberDataList } from "@/Data/Uikits/lists";
import { Card, CardBody, Col, ListGroup, ListGroupItem } from "reactstrap";

const ListsWithNumbers = () => {
  return (
    <Col xxl="4" sm="12">
    <Card>
      <CommonCardHeader title={ListsWithNumber} span={ListNumberData} />
      <CardBody>
        <ListGroup numbered>
          <ListGroupItem className="txt-primary fw-bold">Known for delivery of useful and usable solutions</ListGroupItem>
          {ListNumberDataList.map(({ color, text }, index) => (
             <ListGroupItem className={`txt-${color} fw-bold`} key={index}>{text}</ListGroupItem>
          ))}
        </ListGroup>
      </CardBody>
    </Card>
  </Col>
  )
};

export default ListsWithNumbers;