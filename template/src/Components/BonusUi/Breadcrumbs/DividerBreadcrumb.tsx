import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { BreadcrumbHome, BreadcrumbProgress, BreadcrumbUiKits, DividerBreadcrumbs, Href } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DividerBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";

const DividerBreadcrumb = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={DividerBreadcrumbs} span={DividerBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="breadcrumb-icon">
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbUiKits}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="m-0 breadcrumb-icon" >
            <BreadcrumbItem><a href={Href}>{BreadcrumbHome}</a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbUiKits}</a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbProgress}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default DividerBreadcrumb