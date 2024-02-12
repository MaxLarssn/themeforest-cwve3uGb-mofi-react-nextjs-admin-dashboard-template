import { Card, CardBody } from "reactstrap";
import DefaultCustomStateButtons from "./DefaultCustomStateButtons";
import CommonCardHeading from "../../CommonButtons/CommonCardHeading";
import { CustomButtons } from "@/Constant";
import { CustomButtonsSpan, CustomStateDataList } from "@/Data/Buttons/DefaultStyle";

const DefualtCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={CustomButtonsSpan} />
      <CardBody className="btn-showcase">
        {CustomStateDataList.map((item, index) => (
          <DefaultCustomStateButtons data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  );
};

export default DefualtCustomStateButton;
