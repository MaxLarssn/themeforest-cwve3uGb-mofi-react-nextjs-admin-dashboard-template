import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { FlatButtonGroups, Left, Middle, Right } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonGroupButton from "./Common/CommonGroupButton";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";

const FlatButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={FlatButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xxl="4" md="6" sm="12">
              <ButtonGroup className="btn-group-square">
                <Button color="primary">{Left}</Button>
                <Button color="primary">{Middle}</Button>
                <Button color="primary">{Right}</Button>
              </ButtonGroup>
            </Col>
            <CommonGroupButton data={ButtonGroupData}  buttonClass="btn-group-square" />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default FlatButtonGroup