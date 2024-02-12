import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { NoDataFoundPropsType } from "@/Types/ContactType";
import { Card, CardBody } from "reactstrap";

const NoDataFoundClass :React.FC<NoDataFoundPropsType> = ({ title }) => {
  return (
    <Card className="mb-0">
      <CommonCardHeader title={title} headClass="d-flex"/>
      <CardBody>
        <p>No Data Found</p>
      </CardBody>
    </Card>
  );
};

export default NoDataFoundClass;
