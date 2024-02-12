import { Card, CardBody, Col, Row } from "reactstrap"
import { CustomRadios } from "@/Constant"
import { BorderedRadio } from "./BorderedRadio"
import { IconsRadio } from "./IconsRadio"
import { FilledRadio } from "./FilledRadio"
import CommonCardHeader from "@/CommonComponent/CommonCardHeader"
import { CustomRadioData } from "@/Data/Form&Table/Form"

const CustomRadio = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={CustomRadios} span={CustomRadioData} />
        <CardBody>
          <Row className="g-3">
            <BorderedRadio />
            <IconsRadio />
            <FilledRadio />
          </Row>
        </CardBody>
      </Card>
    </Col>
  )
}

export default CustomRadio