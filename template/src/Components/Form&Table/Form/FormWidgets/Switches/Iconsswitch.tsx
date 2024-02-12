import { Card, CardBody, Col, Label } from "reactstrap";
import { IconsSwitchs } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { IconSwitchData, IconSwitchDataList } from "@/Data/Form&Table/Form";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const Iconsswitch = () => {
  return (
    <Col xl="4" sm="6">
      <Card className="height-equal">
        <CommonCardHeader title={IconsSwitchs} span={IconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper">
          {IconSwitchDataList.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end">
                <CommonSwitchSpan color={color} defaultChecked/>
              </div>
              <Label className="m-l-10" check>{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Iconsswitch;
