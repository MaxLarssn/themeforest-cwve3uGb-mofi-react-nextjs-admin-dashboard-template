import { Card, CardBody, Col, Label } from "reactstrap";
import { BordersWithIcon } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BorderIconSwitchData, BorderIconSwitchDataList } from "@/Data/Form&Table/Form";
import CommonSwitchSpan from "./Common/CommonSwitchSpan";

const BordersWithIcons = () => {
  return (
    <Col xl="4">
      <Card className="height-equal">
        <CommonCardHeader title={BordersWithIcon} span={BorderIconSwitchData} />
        <CardBody className="common-flex flex-column switch-wrapper ">
          {BorderIconSwitchDataList.map(({ color, text }, index) => (
            <div className="d-flex align-items-center" key={index}>
              <div className="text-end icon-state switch-outline">
                <CommonSwitchSpan color={color} defaultChecked />
              </div>
              <Label className="m-l-10" check>{text}</Label>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  )
}

export default BordersWithIcons