import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  studentLevel: 1,
  studentValidationForm: { name: "", email: "", password: "", confirmPassWord: "", portfolioURL: "", projectDescription: "", imageUpload: "", twitterUrl: "", gitHubUrl: "", studentFile: "", positions: "", positionQuestion: "" },
};

const StudentWizardSlice = createSlice({
  name: "StudentWizardSlice",
  initialState,
  reducers: {
    setStudentValidationForm: (state, action) => {
      state.studentValidationForm = action.payload;
    },
    setStudentLevel: (state, action) => {
      state.studentLevel = action.payload;
    },
    handleStudentBackButton: (state) => {
      if (state.studentLevel === 2) {
        state.studentLevel = state.studentLevel - 1;
      }
      if (state.studentLevel === 3) {
        state.studentLevel = state.studentLevel - 1;
      }
      if (state.studentLevel === 4) {
        state.studentLevel = state.studentLevel - 1;
      }
    },

    handleStudentNextButton: (state) => {
      if (state.studentValidationForm.name !== "" && state.studentValidationForm.email !== "" && state.studentValidationForm.password !== "" && state.studentValidationForm.confirmPassWord !== "" && state.studentLevel === 1) {
        state.studentLevel = 2;
      }
      if (state.studentValidationForm.projectDescription !== "" && state.studentValidationForm.portfolioURL !== "" && state.studentValidationForm.imageUpload !== "") {
        state.studentLevel = 3;
      }
      if (state.studentValidationForm.twitterUrl !== "" && state.studentValidationForm.gitHubUrl !== "" && state.studentValidationForm.studentFile !== "" && state.studentValidationForm.positions !== "" && state.studentValidationForm.positionQuestion !== "") {
        state.studentLevel = 4;
      }
    },
  },
});

export const { setStudentLevel,setStudentValidationForm, handleStudentBackButton, handleStudentNextButton } = StudentWizardSlice.actions;

export default StudentWizardSlice.reducer;
