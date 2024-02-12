import { ArticalData } from "@/Data/Miscellaneous/Faq";
import { Card, CardBody, Col  } from "reactstrap";

const Articals = () => {
  return (
    <>
      {ArticalData.map((item) => (
        <Col xl="4" sm={item.sm} className={`"box-col-${item.box}`} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
            <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <h4>{item.title}</h4>
                  <p>{item.paragraph}</p>
                </div>
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default Articals;