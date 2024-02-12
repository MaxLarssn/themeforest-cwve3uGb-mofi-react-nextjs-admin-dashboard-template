import CommonCardHeader from "@/CommonComponent/CommonCardHeader";
import { DisplayHeadings } from "@/Constant";
import { DisplayData } from "@/Data/Uikits/typography";
import { Card, CardBody, Col } from "reactstrap";

const DisplayCart = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader title={DisplayHeadings} span={DisplayData} />
        <CardBody className="d-flex flex-column gap-2">
          <h1 className="display-1 m-0">Display 1</h1>
          <h1 className="display-2 m-0">Display 2</h1>
          <h1 className="display-3 m-0">Display 3</h1>
          <h1 className="display-4 m-0">Display 4</h1>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DisplayCart;
