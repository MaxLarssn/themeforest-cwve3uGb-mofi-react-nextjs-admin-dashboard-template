import ShowError from "@/Components/Other/Authentication/RegisterWizard/common/ShowError";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberLevel:1,
  basicInputFormValue: { email: "", firstName: "", password: "", confirmPassword: "", agreeTerms: false, placeHolderName: "", cardNumber: "", expiration: "", cvvNumber: "", uploadDocumentation: "", informationCheckBox: false, linkedInLink: "", gitHubLink: "", giveFeedBack: "", state: "", agreeConditions: false },
  showFinish:false
};

const NumberingWizardSlice = createSlice({
  name: "NumberingWizardSlice",
  initialState,
  reducers: {
    setBasicInputFormValue: (state,action) => {
      state.basicInputFormValue = action.payload
    },
    setShowFinish: (state,action) => {
      state.showFinish = action.payload
    },
    handleBackButton: (state) => {
      state.showFinish = false
      if (state.numberLevel === 2) {
        state.numberLevel = state.numberLevel - 1
      };
      if (state.numberLevel === 3) {
        state.numberLevel = state.numberLevel - 1
      };
      if (state.numberLevel === 4) {
        state.numberLevel = state.numberLevel - 1
      };
    },
    handleNextButton: (state) => {
      if (state.basicInputFormValue.email !== "" && state.basicInputFormValue.firstName !== "" && state.basicInputFormValue.password !== "" && state.basicInputFormValue.confirmPassword !== "" && state.basicInputFormValue.agreeTerms !== false && state.numberLevel === 1) {
        state.numberLevel = 2
      } else if (state.basicInputFormValue.placeHolderName !== "" && state.basicInputFormValue.cardNumber !== "" && state.basicInputFormValue.expiration !== "" && state.basicInputFormValue.cvvNumber !== "" && state.basicInputFormValue.informationCheckBox !== false && state.basicInputFormValue.uploadDocumentation !== "" && state.numberLevel === 2) {
        state.numberLevel = 3
      }
      else if (state.basicInputFormValue.linkedInLink !== "" && state.basicInputFormValue.gitHubLink !== "" && state.basicInputFormValue.giveFeedBack !== "" && state.basicInputFormValue.state !== "" && state.basicInputFormValue.agreeConditions !== false && state.numberLevel === 3) {
        state.numberLevel = 4
        state.showFinish = true
      } else {
        ShowError();
      }
    },
  },
});

export const { setBasicInputFormValue,setShowFinish,handleBackButton,handleNextButton } = NumberingWizardSlice.actions;

export default NumberingWizardSlice.reducer;
