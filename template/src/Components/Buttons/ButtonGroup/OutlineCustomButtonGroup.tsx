import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { OutlineCustomButtonGroupTitle, Left, Middle, Right } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";

const OutlineCustomButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OutlineCustomButtonGroupTitle} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-pill">
                <Button outline color="primary">{Left}</Button>
                <Button color="primary">{Middle}</Button>
                <Button outline color="primary">{Right}</Button>
              </ButtonGroup>
            </Col>
            {ButtonGroupData.map((item, index) => (
              <Col xl="4" md="6" sm="12" key={index}>
                <ButtonGroup className="btn-group-pill">
                  <Button outline color={item}>{Left}</Button>
                  <Button color={item}>{Middle}</Button>
                  <Button outline color={item}>{Right}</Button>
                </ButtonGroup>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineCustomButtonGroup;
