import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { LargeEdgesButtonGroups, Left, Middle, Right } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonGroupButton from "./Common/CommonGroupButton";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";

const LargeEdgesButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={LargeEdgesButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xxl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-pill">
                <Button size="lg" color="primary">{Left}</Button>
                <Button size="lg" color="primary">{Middle}</Button>
                <Button size="lg" color="primary">{Right}</Button>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-pill" size="lg" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default LargeEdgesButtonGroup