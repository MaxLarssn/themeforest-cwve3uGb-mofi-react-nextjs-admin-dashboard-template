import ShowError from "@/Components/Other/Authentication/RegisterWizard/common/ShowError";
import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  netBankingFormValues: { bankName: "", feedBack: "" },
  open: "",
};

const VerticalWizardSlice = createSlice({
  name: "VerticalWizard",
  initialState,
  reducers: {
    setNetBankingForm: (state, action) => {
      state.netBankingFormValues = action.payload;
    },
    bankingNextHandler: (state) => {
      if (state.netBankingFormValues.bankName !== "" && state.netBankingFormValues.feedBack !== "") {
        toast.info("Form successfully submitted");
      } else {
        ShowError();
      }
    },
  },
});

export const { setNetBankingForm, bankingNextHandler } = VerticalWizardSlice.actions;

export default VerticalWizardSlice.reducer;
