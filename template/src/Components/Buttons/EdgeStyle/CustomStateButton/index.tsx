import { Card, CardBody } from "reactstrap";
import EdgeCustomStateButtons from "./EdgeCustomStateButtons";
import CommonCardHeading from "../../CommonButtons/CommonCardHeading";
import { CustomButtons } from "@/Constant";
import { CustomButtonsSpan, CustomStateDataList } from "@/Data/Buttons/DefaultStyle";

const EdgeCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={CustomButtonsSpan} />
      <CardBody className="btn-showcase">
        {CustomStateDataList.map((item, index) => (
          <EdgeCustomStateButtons data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  );
};

export default EdgeCustomStateButton;
