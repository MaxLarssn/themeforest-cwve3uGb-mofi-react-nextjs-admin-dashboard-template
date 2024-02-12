import { Card, CardBody } from "reactstrap";
import CommonCardHeading from "../../CommonButtons/CommonCardHeading";
import RaisedCustomStateButtons from "./RaisedCustomStateButtons";
import { CustomButtonsSpan, CustomStateDataList } from "@/Data/Buttons/DefaultStyle";
import { CustomButtons } from "@/Constant";

const EdgeCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={CustomButtonsSpan} />
      <CardBody className="btn-showcase">
        {CustomStateDataList.map((item, index) => (
          <RaisedCustomStateButtons data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  );
};

export default EdgeCustomStateButton;
