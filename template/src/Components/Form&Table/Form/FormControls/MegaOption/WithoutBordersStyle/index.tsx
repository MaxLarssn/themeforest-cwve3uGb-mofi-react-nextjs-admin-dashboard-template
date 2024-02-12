import { Card, CardBody, Col } from "reactstrap";
import CommonCardFooter from "../Common/CommonCardFooter";
import { WithoutBordersStyles } from "@/Constant";
import WithoutBordersStyleForm from "./WithoutBordersStyleForm";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WithoutBorderData } from "@/Data/Form&Table/Form";

const WithoutBordersStyle = () => {
  return (
    <Col sm="12" xxl="6" className="box-col-6">
      <Card>
        <CommonCardHeader title={WithoutBordersStyles} span={WithoutBorderData} />
        <CardBody>
          <WithoutBordersStyleForm />
        </CardBody>
        <CommonCardFooter footerClass="text-end" color1="warning" color2="light-warning" btn2Class="list-light-warning"/>
      </Card>
    </Col>
  )
};

export default WithoutBordersStyle;
