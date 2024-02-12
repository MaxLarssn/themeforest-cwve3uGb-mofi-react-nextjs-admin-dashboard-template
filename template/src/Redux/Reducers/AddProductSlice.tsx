import { AddProductSliceType } from "@/Types/EcommerceType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: AddProductSliceType = {
  navId: 1,
  tabId: 1,
  formValue: {
    userName: "",
    fileName: "",
    fileName1: "",
    category: "",
    status: "",
    initialCost: "",
    initialPrice: "",
    select: "",
    productStocks: "",
    stock: "",
    lowStock: "",
    sku: "",
    quantity: "",
    restock: "",
    additionalTag: "",
    zipCode: "",
    city: "",
    state: "",
    inputCity: "",
    inputState: "",
  },
};

const AddProductSlice = createSlice({
  name: "addProduct",
  initialState,
  reducers: {
    setNavId: (state, action) => {
      state.navId = action.payload;
    },
    setTabId: (state, action) => {
      state.tabId = action.payload;
    },
    setFormValue: (state, action) => {
      state.formValue[action.payload.name] = action.payload.value;
    },
  },
});
export const { setNavId, setFormValue, setTabId } = AddProductSlice.actions;

export default AddProductSlice.reducer;
