import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Left, Middle, OutlineCustomButtonGroupTitle, Right } from "@/Constant";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";
import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";

const OutlineCustomButtonGroups = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OutlineCustomButtonGroupTitle} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-pill">
                <Button color="primary">{Left}</Button>
                <Button outline color="primary">{Middle}</Button>
                <Button color="primary">{Right}</Button>
              </ButtonGroup>
            </Col>
            {ButtonGroupData.map((item, index) => (
              <Col xl="4" md="6" sm="12" key={index}>
                <ButtonGroup className="btn-group-pill">
                  <Button color={item}>{Left}</Button>
                  <Button outline color={item}>{Middle}</Button>
                  <Button color={item}>{Right}</Button>
                </ButtonGroup>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineCustomButtonGroups