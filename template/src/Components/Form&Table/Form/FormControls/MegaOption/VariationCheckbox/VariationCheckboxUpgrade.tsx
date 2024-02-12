import { UpgradeSpanText, UpgradeTitle } from "@/Constant";
import { UpgradeVariationData } from "@/Data/Form&Table/Form";
import { Col, Input } from "reactstrap";

const VariationCheckboxUpgrade = () => {
const UpgradeParagraph:string = "Select the theme that best suits your requirements, and you're ready to go!";

  return (
    <Col xl="8" md="7">
      <div className="card-wrapper border rounded-3 h-100 checkbox-checked">
        <section className="main-upgrade">
          <div>
            <i className="fa fa-rocket"></i>
            <h5 className="mb-2">
              {UpgradeTitle} <span className="txt-primary">{UpgradeSpanText}</span>
            </h5>
            <p className="text-muted mb-2">{UpgradeParagraph}</p>
          </div>
          <div className="variation-box">
            {UpgradeVariationData.map(({id,check,text,sales},index) => (
              <div className="selection-box" key={index}>
                <Input id={`feature${id}`} type="checkbox" defaultChecked={check} />
                <div className="custom--mega-checkbox">
                  <ul>
                    <li>{text}</li>
                    <li className="txt-primary">{sales}</li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Col>
  );
};

export default VariationCheckboxUpgrade;
