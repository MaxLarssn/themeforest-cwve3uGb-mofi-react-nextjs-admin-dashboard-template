import { UpgradePlan, ViewProject } from "@/Constant";
import { Button } from "reactstrap";

const UserPlans = () => {
  return (
    <>
      <ul className="d-flex align-items-center gap-3">
        <li className="bg-light">
          <h5>$34,930</h5>
          <p>Disbursed Budget</p>
        </li>
        <li className="bg-light">
          <h5>$65,789</h5>
          <p>Planned</p>
        </li>
      </ul>
      <div>
        <Button color="primary" className="me-1">{UpgradePlan}</Button>
        <Button color="secondary">{ViewProject}</Button>
      </div>
    </>
  );
};

export default UserPlans;
