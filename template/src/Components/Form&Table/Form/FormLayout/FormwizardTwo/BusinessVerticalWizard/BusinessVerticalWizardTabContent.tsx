import { TabContent, TabPane } from "reactstrap";
import SelectAccount from "./SelectAccount";
import BusinessSettingsForm from "./BusinessSettingsForm";
import ContactDetailsForm from "./ContactDetailsForm";
import PayDetailsForm from "./PayDetailsForm";
import { BusinessFormCommonProps } from "@/Types/FormType";
import FinishForm from "../../FormWizardOne/Common/FinishForm";

const BusinessVerticalWizardTabContent :React.FC<BusinessFormCommonProps> = ({ activeTab, callbackActive }) => {
  return (
    <TabContent className="dark-field" activeTab={activeTab}>
      <TabPane tabId={1}>
        <SelectAccount callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={2}>
        <BusinessSettingsForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={3}>
        <ContactDetailsForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={4}>
        <PayDetailsForm callbackActive={callbackActive} />
      </TabPane>
      <TabPane tabId={5}>
        <FinishForm />
      </TabPane>
    </TabContent>
  );
};

export default BusinessVerticalWizardTabContent;
