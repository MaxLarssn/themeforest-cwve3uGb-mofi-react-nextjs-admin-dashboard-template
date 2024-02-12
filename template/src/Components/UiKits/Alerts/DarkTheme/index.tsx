import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { LinkColorDarkTheme } from "@/Constant";
import { Card, CardBody, Col, Row } from "reactstrap";
import { DarkThemeLeftSection } from "./DarkThemeLeftSection";
import { DarkThemeRightSection } from "./DarkThemeRightSection";
import { LinkColorData } from "@/Data/Uikits/alert";

export const DarkTheme = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader title={LinkColorDarkTheme} span={LinkColorData} />
        <CardBody>
          <Row>
            <DarkThemeLeftSection />
            <DarkThemeRightSection />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
