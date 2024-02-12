//@ts-nocheck
import { Card, CardBody, Col, UncontrolledAccordion } from "reactstrap";
import CommonAccordionItem from "../Common/CommonAccordionItem";
import { StaticAccordion } from "./StaticAccordion";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OutlineAccordions } from "@/Constant";
import { OutlineData, OutlineList } from "@/Data/Uikits/accordion";

const OutlineAccordion = () => {
  return (
    <Col xl="6" sm="12">
      <Card className="basic-accordion">
        <CommonCardHeader title={OutlineAccordions} span={OutlineData} />
        <CardBody>
          <UncontrolledAccordion stayOpen className="dark-accordion">
            <StaticAccordion/>
            {OutlineList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </UncontrolledAccordion>
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAccordion;
