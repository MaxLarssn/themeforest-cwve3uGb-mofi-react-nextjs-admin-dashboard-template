//@ts-nocheck
import { useState } from "react";
import { Accordion, Card, CardBody, Col } from "reactstrap";
import CommonAccordionItem from "../Common/CommonAccordionItem";
import { StaticAccordion } from "./StaticAccordion";
import { SimpleAccordions } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AccordionData, AccordionList } from "@/Data/Uikits/accordion";

export const SimpleAccordion = () => {
  const [open, setOpen] = useState("1");
  const toggle = (id) => (open === id ? setOpen() : setOpen(id));

  return (
    <Col sm="12" xl="6">
      <Card className="basic-accordion">
        <CommonCardHeader title={SimpleAccordions} span={AccordionData} />
        <CardBody>
          <Accordion open={open} toggle={toggle} className="dark-accordion">  
            <StaticAccordion />
            {AccordionList.map((data, index) => (
              <CommonAccordionItem item={data} key={index} />
            ))}
          </Accordion>
        </CardBody>
      </Card>
    </Col>
  );
};
