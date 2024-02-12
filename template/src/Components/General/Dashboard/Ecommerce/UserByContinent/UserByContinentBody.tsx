import MapItems from "./MapItems";
import AllOverContriesSale from "./AllOverContriesSale";
import { Progress } from "reactstrap";

const UserByContinentBody = () => {
  return (
    <>
      <div className="user-map-menu d-flex align-items-center gap-5">
        <div className="user-items">
          <h5>1,506<span>{"items"}</span></h5>
          <Progress multi>
            <Progress bar color="primary" value={25} />
            <Progress bar color="secondary" value={25} />
            <Progress bar color="warning" value={25} />
            <Progress bar color="tertiary" value={25} />
          </Progress>
        </div>
        <MapItems />
      </div>
      <AllOverContriesSale />
    </>
  );
};

export default UserByContinentBody;
