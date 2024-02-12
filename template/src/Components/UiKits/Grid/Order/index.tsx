import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Order, OrderClass, OrderValueClass } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import GridCommonCardFooter from "../Common/GridCommonCardFooter";
import { OrderData, OrderList } from "@/Data/Uikits/grid";

const OrderCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={Order} span={OrderData} />
        <CardBody className="grid-showcase">
          <Row className="g-2">
            <Col xs="3" className="order-3"><span>First Item (order-3)</span></Col>
            {OrderList.map(({ extraSmallSize, smallSize, item, order }, index) => (
              <Col xs={extraSmallSize} sm={smallSize && smallSize} className={order} key={index}><span>{item} ({order})</span></Col>
            ))}
          </Row>
        </CardBody>
        <GridCommonCardFooter className={OrderClass} valueClass={OrderValueClass} />
      </Card>
    </Col>
  );
};

export default OrderCart;
