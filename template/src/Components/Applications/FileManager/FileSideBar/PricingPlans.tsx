import { FREE, ImagePath, PlanSpace, PricingPlan, Selected, TrialVersion } from "@/Constant";
import { Grid } from "react-feather";
import { Button } from "reactstrap";

const PricingPlans = () => {
  return (
    <ul>
      <li>
        <Button outline color="primary" className="w-100 progress-text"><Grid/>{PricingPlan}</Button>
      </li>
      <li>
        <div className="pricing-plan">
          <h6 className="f-w-700">{TrialVersion} </h6>
          <h5>{FREE}</h5>
          <p>{PlanSpace}</p>
          <Button size="xs" outline color="primary">{Selected}</Button>
          <img className="bg-img" src={`${ImagePath}/dashboard/folder.png`} alt=""/>
        </div>
      </li>
    </ul>
  );
};

export default PricingPlans;