import { Button, Card, CardBody, Col, Popover, PopoverBody, PopoverHeader } from "reactstrap";
import { useState } from "react";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { BasicPopovers, HurryUps } from "@/Constant";
import CommonPopover from "./Common/CommonPopover";
import { BasicPopoverData, BasicPopoverList } from "@/Data/Uikits/popover";

const BasicPopover = () => {
  const [basicPopover, setBasicPopover] = useState(false);
  const basicToggle = () => setBasicPopover(!basicPopover);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={BasicPopovers} span={BasicPopoverData} />
        <CardBody className="common-flex popover-wrapper">
          <Button  id="Popover-1" color="primary" className="example-popover" onClick={basicToggle}>{HurryUps}</Button>
          <Popover className="example-popover mb-0 me-0" isOpen={basicPopover} placement="top" target="Popover-1" trigger="click">
            <PopoverHeader>Basic Popover</PopoverHeader>
            <PopoverBody>If the package restore doesn't help, you can look at the Output window in the Visual Studio.</PopoverBody>
          </Popover>
          {BasicPopoverList.map((data) => (
            <CommonPopover key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicPopover;
