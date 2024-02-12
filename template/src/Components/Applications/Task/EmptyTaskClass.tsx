import { Printer } from "react-feather";
import { Card, CardBody, CardHeader } from "reactstrap";
import { Href, Print } from "@/Constant";
import { EmptyTaskClassProp } from "@/Types/TaskType";
import Link from "next/link";

const EmptyTaskClass :React.FC<EmptyTaskClassProp> = ({ title }) => {
  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h4 className="mb-0">{title}</h4>
        <Link href={Href}>
          <Printer className="me-2" />{Print}</Link>
      </CardHeader>
      <CardBody>
        <div className="details-bookmark text-center">
          <div className="no-favourite">
            <span>No Task Due Today</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
export default EmptyTaskClass;
