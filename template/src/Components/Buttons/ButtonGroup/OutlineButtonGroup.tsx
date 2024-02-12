import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { OutlineButtonGroups, Left, Middle, Right } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonGroupButton from "./Common/CommonGroupButton";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";

const OutlineButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={OutlineButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xxl="4" md="6" sm="12">
              <ButtonGroup>
                <Button outline color="primary">{Left}</Button>
                <Button outline color="primary">{Middle}</Button>
                <Button outline color="primary">{Right}</Button>
              </ButtonGroup>
            </Col>
              <CommonGroupButton data={ButtonGroupData} outline={true} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default OutlineButtonGroup