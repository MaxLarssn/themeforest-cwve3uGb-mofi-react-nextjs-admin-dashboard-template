import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalOne: false,
  modalTwo: false,
  selectAuthenticatorMethodName: "",
  active:true
};

const TwoFactorSlice = createSlice({
  name: "TwoFactorSlice",
  initialState,
  reducers: {
    setModalOne: (state) => {
      state.modalOne = !state.modalOne;
    },
    setModalTwo: (state) => {
      state.modalTwo = !state.modalTwo;
    },
    getValue: (state, action) => {
      state.selectAuthenticatorMethodName = action.payload;
    },
    setActive: (state,action) => {
      state.active = action.payload;
    },
  },
});

export const { setModalOne, setModalTwo, getValue,setActive } = TwoFactorSlice.actions;

export default TwoFactorSlice.reducer;
