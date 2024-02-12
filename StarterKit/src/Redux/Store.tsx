import { configureStore } from "@reduxjs/toolkit";
import HeaderBookmarkSlice from "./Reducers/HeaderBookmarkSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";
import LanguageSlice from "./Reducers/LanguageSlice";

const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    headerBookMark:HeaderBookmarkSlice,
    themeCustomizer: ThemeCustomizerSlice,
    langSlice: LanguageSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
