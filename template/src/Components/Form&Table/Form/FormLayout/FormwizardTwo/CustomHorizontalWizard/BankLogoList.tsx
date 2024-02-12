import { ChooseBanks, ImagePath } from "@/Constant";
import { PopulerBankList } from "@/Data/Form&Table/Form";
import { useAppSelector } from "@/Redux/Hooks";
import { BankLogoListProp } from "@/Types/FormType";
import { Col, FormGroup, Input, Label } from "reactstrap";

export const BankLogoList: React.FC<BankLogoListProp> = ({ getUserData }) => {
  const { bankDetailsForm } = useAppSelector((state) => state.formWizardTwo);
  const { bankName } = bankDetailsForm;

  return (
    <Col xs="12">
      <h6>{ChooseBanks}</h6>
      <div className="bank-selection">
        <FormGroup check className="radio radio-primary ps-0">
          <ul className="radio-wrapper d-flex flex-row mb-3">
            {PopulerBankList.map((data, index) => (
              <li key={index}>
                <Input id={data.bankName} type="radio" name="bankName" value={data.bankName} checked={bankName === data.bankName} onChange={getUserData} />
                <Label htmlFor={data.bankName} check>
                  <img src={`${ImagePath}/forms/${data.imageName}`} alt={data.bankName} />
                  <span>{data.bankName}</span>
                </Label>
              </li>
            ))}
          </ul>
        </FormGroup>
      </div>
    </Col>
  );
};
