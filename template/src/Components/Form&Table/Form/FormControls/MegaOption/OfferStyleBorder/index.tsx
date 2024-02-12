import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import { OfferStyleBorders } from "@/Constant";
import OfferStyleBorderForm from "./OfferStyleBorderForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { OfferBorderStyleData } from "@/Data/Form&Table/Form";

const OfferStyleBorder = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={OfferStyleBorders} span={OfferBorderStyleData} />
        <CardBody className="megaoptions-border-space-sm">
          <OfferStyleBorderForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="success" color2="light-success" btn2Class='list-light-success' />
      </Card>
    </Col>
  )
};

export default OfferStyleBorder;
