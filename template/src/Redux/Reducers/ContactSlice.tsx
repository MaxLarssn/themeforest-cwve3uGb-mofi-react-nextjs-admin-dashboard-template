import { ImagePath } from "@/Constant";
import { ContactSliceType, ContactUsersType } from "@/Types/ContactType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ContactSliceType = {
  users: [],
  contactFilter: false,
  contactValidation: false,
  modal: false,
  categoryModal: false,
  tempId: 0,
  history:false
};

export const fetchContactApiData = createAsyncThunk<ContactUsersType[], void, {}>("/api/contactapi", async () => {
  const response = await axios.get("/api/contactapi");
  return response.data;
});

const ContactSlice = createSlice({
  name: "ContactSlice",
  initialState,
  reducers: {
    setContactFilter: (state) => {
      state.contactFilter = !state.contactFilter;
    },
    setContactValidation: (state, action) => {
      state.contactValidation = action.payload;
    },
    setModal: (state) => {
      state.modal = !state.modal;
    },
    createUser: (state, action) => {
      const userTemp = {
        id: state.users.length + 1,
        avatar: `${ImagePath}/user/user.png`,
        name: action.payload.name,
        surname: action.payload.surname,
        email: action.payload.email,
        mobile: action.payload.mobile,
      };
      state.users = [...state.users, userTemp];
    },
    setCategoryModal: (state) => {
      state.categoryModal = !state.categoryModal;
    },
    setEditData: (state, action) => {
      state.users = state.users.map((item) => (item.id === state.tempId ? action.payload : item));
    },
    setTempId: (state, action) => {
      state.tempId = action.payload;
    },
    deletedUser: (state, action) => {
      state.users = state.users.filter((data) => data.id !== action.payload);
    },
    setHistory: (state) => {
      state.history = !state.history;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchContactApiData.fulfilled, (state, action) => {
      state.users = action.payload;
    });
  },
});

export const { setHistory,deletedUser, setTempId, setEditData, setCategoryModal, createUser, setContactFilter, setContactValidation, setModal } = ContactSlice.actions;

export default ContactSlice.reducer;
