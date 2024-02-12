import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { Buttons, VerticalGroupButton } from "@/Constant";
import { VerticalButtonGroup } from "@/Data/Buttons/ButtonGroup";
import { Button, ButtonGroup, Card, CardBody, Col } from "reactstrap";
import CommonDropDown from "./Common/CommonDropDown";

const Vertical = () => {
  return (
    <Col lg="6">
      <Card className="height-equal">
        <CommonCardHeader title={VerticalGroupButton} span={VerticalButtonGroup} />
        <CardBody className="btn-group-wrapper">
          <ButtonGroup vertical>
            <Button color="primary">{Buttons}</Button>
            <Button color="secondary">{Buttons}</Button>
           <CommonDropDown color="success" />
            <Button color="info">{Buttons}</Button>
            <Button color="warning">{Buttons}</Button>
            <CommonDropDown color="danger" />
            <CommonDropDown color="light" dark />
          </ButtonGroup>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Vertical;
