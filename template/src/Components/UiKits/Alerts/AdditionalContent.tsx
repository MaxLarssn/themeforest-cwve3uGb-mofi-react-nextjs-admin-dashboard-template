import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { AdditionalContents, PleaseCheckYourNotifications } from "@/Constant";
import { AdditionalData, AdditionalList } from "@/Data/Uikits/alert";
import { Alert, Card, CardBody, Col } from "reactstrap";

const AdditionalContent = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader title={AdditionalContents} span={AdditionalData} />
        <CardBody className="dark-alert">
          <Alert color="light-primary">
            <h5 className="alert-heading pb-2 txt-primary">{PleaseCheckYourNotifications}</h5>
            <p>The duty of notification is imposed upon the head of the family, and also upon the medical practitioner who may be in attendance on the patient.</p>
            <hr />
            <p className="mb-0">The emergency notification system is free and is available in all 50 states.</p>
          </Alert>
          {AdditionalList.map(({ color, title, paragraph1, paragraph2 }, index) => (
            <Alert color={`light-${color}`} key={index}>
              <h5 className={`alert-heading pb-2 txt-${color}`}>{title}</h5>
              <p>{paragraph1}</p>
              <hr />
              <p className="mb-0">{paragraph2}</p>
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AdditionalContent;
