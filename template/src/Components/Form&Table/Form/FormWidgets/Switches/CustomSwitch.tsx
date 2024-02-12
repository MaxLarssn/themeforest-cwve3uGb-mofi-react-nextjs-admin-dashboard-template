import { Card, CardBody, Col, Row } from "reactstrap";
import { CustomSwitchs } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { CustomSwitchData, CustomSwitchDataList } from "@/Data/Form&Table/Form";
import CommonSwitch from "./Common/CommonSwitch";

const CustomSwitch = () => {
  return (
    <Col md="12">
      <Card>
        <CommonCardHeader title={CustomSwitchs} span={CustomSwitchData} />
        <CardBody>
          <Row className="g-3">
            {CustomSwitchDataList.map(({ id, item, cardClass, formClass, disabled, sm }) => (
              <Col md="4" sm={sm} key={id}>
                <div className={`card-wrapper border rounded-3 ${cardClass} `}>
                  <div className={`form-check-size ${formClass}`}>
                    {item.map((item, index) => (
                      <CommonSwitch color={item} defaultChecked disabled={disabled} key={index} />
                    ))}
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomSwitch;
