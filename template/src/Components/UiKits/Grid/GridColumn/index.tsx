import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { GridForColumn } from "@/Constant";
import { ColumnData, GridColumnDetails } from "@/Data/Uikits/grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const GridColumnCart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={GridForColumn} span={ColumnData} />
        <CardBody className="grid-showcase">
          <Row>
            <Col md="1" className="text-center"><span>col-md-1</span></Col>
            {GridColumnDetails.map(({ size, item }, index) => (
              <Col md={size} className={`${item} text-center`} key={index}><span>{item}</span></Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumnCart;
