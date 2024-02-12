import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  personalDetailsForm: { firstName: "", lastName: "", contact: "", email: "", state: "", zip: "" },
  bankDetailsForm: { aadhaarNumber: "", panNumber: "", bankName: "" },
  inquiresForm:{notifications: "",email: "",contactNumber: "",describeIssue: "",},
  accountType:"",
  businessSettingsFormValues:{accountName: "",email: "",description: "",},
  contactDetailsFormValues:{organizationName: "",email: "",description: "",organizationType: "",},
  payDetailsFormValues:{cardHolderName: "",cardNumber: "",expiryDate: "",expiryYear: "",cvvNumber: "",},
};

const FormWizardTwoSlice = createSlice({
  name: "FormWizardTwoSlice",
  initialState,
  reducers: {
    setPersonalDetailsForm: (state, action) => {
      state.personalDetailsForm = action.payload;
    },
    setBankDetailsForm: (state, action) => {
      state.bankDetailsForm = action.payload;
    },
    setInquiresForm: (state, action) => {
      state.inquiresForm = action.payload;
    },
    setAccountType: (state, action) => {
      state.accountType = action.payload;
    },
    setBusinessSettingsFormValues: (state, action) => {
      state.businessSettingsFormValues = action.payload;
    },
    setContactDetailsFormValue: (state, action) => {
      state.contactDetailsFormValues = action.payload;
    },
    setPayDetailsFormValues: (state, action) => {
      state.payDetailsFormValues = action.payload;
    },
  },
});

export const { setPersonalDetailsForm, setBankDetailsForm ,setInquiresForm,setAccountType,setBusinessSettingsFormValues,setContactDetailsFormValue,setPayDetailsFormValues} = FormWizardTwoSlice.actions;

export default FormWizardTwoSlice.reducer;
