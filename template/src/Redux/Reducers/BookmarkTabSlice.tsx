import { BookmarkData } from "@/Data/Application/Bookmark";
import { BookmarkTabSliceProp } from "@/Types/BookmarkType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: BookmarkTabSliceProp = {
  bookmark: BookmarkData,
  bookmarkFilter: false,
  activeTabs: "1",
  addModal: false,
  bookmarkValidation: false,
  tagModal: false,
  gridView: true,
  editModal: false,
  editRow: null,
  bookMarkList: [],
};

const BookmarkTabSlice = createSlice({
  name: "BookmarkTab",
  initialState,
  reducers: {
    setBookmarkFilter: (state) => {
      state.bookmarkFilter = !state.bookmarkFilter;
    },
    setAddModal: (state) => {
      state.addModal = !state.addModal;
    },
    updateActiveTabs: (state, action) => {
      state.activeTabs = action.payload;
    },
    setTagModal: (state) => {
      state.tagModal = !state.tagModal;
    },
    addNewBookmark: (state, action) => {
      const bookmarkTemp = {
        id: state.bookmark.length + 1,
        fillStar: false,
        image: "lightgallry/01.jpg",
        title: action.payload.title,
        website_url: action.payload.url,
        desc: action.payload.desc,
        collection: "General",
      };
      state.bookmark = [...state.bookmark, bookmarkTemp];
    },
    setBookmarkValidation: (state, action) => {
      state.bookmarkValidation = action.payload;
    },
    setGridView: (state, action) => {
      state.gridView = action.payload;
    },
    setBookmark: (state, action) => {
      state.bookmark = action.payload;
    },
    setEditModal: (state) => {
      state.editModal = !state.editModal;
    },
    setEditRow: (state, action) => {
      state.editRow = action.payload;
    },
    setBookMarkList: (state, action) => {
      state.bookMarkList = action.payload;
    },
    setRemoveBookmark: (state, action) => {
      state.bookmark = state.bookmark.filter((data) => data.id !== action.payload);
    },
    updateBookMark: (state, action) => {
      const bookmarkTemp = {
        id: action.payload.id,
        fillStar: action.payload.data.fillStar,
        image: 'lightgallry/01.jpg',
        title: action.payload.data.title,
        website_url: action.payload.data.url,
        desc: action.payload.data.desc,
        collection: action.payload.data.collection,
      };
      state.bookmark = state.bookmark.map((item) =>
        item.id === action.payload.id ? bookmarkTemp : item
      );
    },
  },
});

export const { updateBookMark,setRemoveBookmark, setBookMarkList, setBookmark, setEditRow, setEditModal, setGridView, setTagModal, updateActiveTabs, setBookmarkValidation, addNewBookmark, setAddModal, setBookmarkFilter } = BookmarkTabSlice.actions;

export default BookmarkTabSlice.reducer;
