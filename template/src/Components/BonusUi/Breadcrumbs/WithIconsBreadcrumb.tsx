import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";
import { WithIconsBreadcrumbs, Href, BreadcrumbBonusUi, Breadcrumbs } from "@/Constant";
import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { WithIconBreadcrumbData } from "@/Data/BonusUi/Breadcrumb";

const WithIconsBreadcrumb = () => {
  return (
    <Col md="6">
      <Card className="height-equal">
        <CommonCardHeader title={WithIconsBreadcrumbs} span={WithIconBreadcrumbData} />
        <CardBody>
          <Breadcrumb className="bg-white p-l-0">
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem active>{BreadcrumbBonusUi}</BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb className="bg-white m-b-0 p-b-0 p-l-0" >
            <BreadcrumbItem><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
            <BreadcrumbItem><a href={Href}>{BreadcrumbBonusUi}</a></BreadcrumbItem>
            <BreadcrumbItem active>{Breadcrumbs}</BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  )
}

export default WithIconsBreadcrumb