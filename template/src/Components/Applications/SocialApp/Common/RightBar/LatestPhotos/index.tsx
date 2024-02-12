import { Card } from "reactstrap";
import { useState } from "react";
import LatestPhotosCollapse from "./LatestPhotosCollapse";
import HeaderWithIcon from "../../HeaderWithIcon";
import { LatestPhoto } from "@/Constant";

const LatestPhotos = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <Card>
      <HeaderWithIcon Heading={LatestPhoto} isOpen={isOpen} setIsOpen={setIsOpen}/>
      <LatestPhotosCollapse isFilter={isOpen} />
    </Card>
  );
};

export default LatestPhotos;
