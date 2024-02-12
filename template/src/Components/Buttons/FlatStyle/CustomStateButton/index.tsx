import { Card, CardBody } from "reactstrap";
import FlateCustomStateButtons from "./FlateCustomStateButtons";
import CommonCardHeading from "../../CommonButtons/CommonCardHeading";
import { CustomButtons } from "@/Constant";
import { CustomButtonsSpan, CustomStateDataList } from "@/Data/Buttons/DefaultStyle";

const FlatCustomStateButton = () => {
  return (
    <Card>
      <CommonCardHeading smallHeading={CustomButtons} span={CustomButtonsSpan} />
      <CardBody className="btn-showcase">
        {CustomStateDataList.map((item, index) => (
          <FlateCustomStateButtons data={item} key={index} />
        ))}
      </CardBody>
    </Card>
  );
};

export default FlatCustomStateButton;
