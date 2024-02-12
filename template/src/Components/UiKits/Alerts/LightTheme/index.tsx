import { Card, CardBody, Col, Row } from "reactstrap";
import { LightThemeLeftSection } from "./LightThemeLeftSection";
import LightThemeRightSection from "./LightThemeRightSection";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LinkColorLightTheme } from "@/Constant";
import { LinkColorData } from "@/Data/Uikits/alert";

const LightTheme = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={LinkColorLightTheme} span={LinkColorData} />
        <CardBody>
          <Row>
            <LightThemeLeftSection />
            <LightThemeRightSection />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightTheme;
