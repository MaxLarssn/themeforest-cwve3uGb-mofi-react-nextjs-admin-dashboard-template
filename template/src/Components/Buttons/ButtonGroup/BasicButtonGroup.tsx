import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";
import { BasicButtonGroups, Left, Middle, Right } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import CommonGroupButton from "./Common/CommonGroupButton";
import { ButtonGroupData } from "@/Data/Buttons/ButtonGroup";

const BasicButtonGroup = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicButtonGroups} />
        <CardBody className="btn-group-showcase">
          <Row>
            <Col xxl="4" md="6" sm="12">
              <ButtonGroup>
                <Button color="primary">{Left}</Button>
                <Button color="primary">{Middle}</Button>
                <Button color="primary">{Right}</Button>
              </ButtonGroup>
            </Col>
              <CommonGroupButton data={ButtonGroupData} />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicButtonGroup;
