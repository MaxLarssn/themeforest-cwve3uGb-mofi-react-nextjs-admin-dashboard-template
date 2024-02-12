import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { HorizontalAccordions, ToggleWidthCollapse } from "@/Constant";
import { AccordionHorizontal } from "@/Data/Uikits/accordion";
import React, { useState } from "react";
import { Button, Card, CardBody, Col, Collapse, Row } from "reactstrap";

const HorizontalAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  
  return (
    <Col md="" sm="12">
      <Card>
        <CommonCardHeader title={HorizontalAccordions} span={AccordionHorizontal} />
        <CardBody>
          <div className="common-flex">
            <Button color="secondary" onClick={toggle}>{ToggleWidthCollapse}</Button>
          </div>
          <Row>
            <Col sm="5">
              <Collapse isOpen={isOpen} horizontal className="mt-3">
                <Card className="bg-light-secondary accordion-h-space mb-0 text-dark card-body">
                  The collapse plugin also supports horizontal collapsing. Add the .collapse-horizontal modifier class to transition the width instead of height and set a width on the immediate child element. Feel free to write your own custom Sass, use inline styles, or use our width utilities.
                </Card>
              </Collapse>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HorizontalAccordion;
