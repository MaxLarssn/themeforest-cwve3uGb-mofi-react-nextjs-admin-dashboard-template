import { configureStore } from "@reduxjs/toolkit";
import BookmarkTabSlice from "./Reducers/BookmarkTabSlice";
import ChatSlice from "./Reducers/ChatSlice";
import ContactSlice from "./Reducers/ContactSlice";
import FileManagerSlice from "./Reducers/FileManagerSlice";
import FormWizardTwoSlice from "./Reducers/FormLayout/FormWizardTwoSlice";
import NumberingWizardSlice from "./Reducers/FormLayout/NumberingWizardSlice";
import StudentWizardSlice from "./Reducers/FormLayout/StudentWizardSlice";
import TwoFactorSlice from "./Reducers/FormLayout/TwoFactorSlice";
import VerticalWizardSlice from "./Reducers/FormLayout/VerticalWizardSlice";
import LanguageSlice from "./Reducers/LanguageSlice";
import LayoutSlice from "./Reducers/LayoutSlice";
import ProjectSlice from "./Reducers/ProjectSlice";
import TaskSlice from "./Reducers/TaskSlice";
import ToDoSlice from "./Reducers/ToDoSlice";
import ProductSlice from "./Reducers/ProductSlice";
import FilterSlice from "./Reducers/FilterSlice";
import CartSlice from "./Reducers/CartSlice";
import LetterBoxSlice from "./Reducers/LetterBoxSlice";
import HeaderBookmarkSlice from "./Reducers/HeaderBookmarkSlice";
import ThemeCustomizerSlice from "./Reducers/ThemeCustomizerSlice";
import AddProductSlice from "./Reducers/AddProductSlice";

const Store = configureStore({
  reducer: {
    layout: LayoutSlice,
    twoFactor: TwoFactorSlice,
    numberingWizard: NumberingWizardSlice,
    studentWizard: StudentWizardSlice,
    verticalWizard: VerticalWizardSlice,
    formWizardTwo:FormWizardTwoSlice,
    project: ProjectSlice,
    langSlice: LanguageSlice,
    fileManager:FileManagerSlice,
    todo:ToDoSlice,
    task: TaskSlice,
    contact: ContactSlice,
    bookmarkTab:BookmarkTabSlice,
    chat:ChatSlice,
    product:ProductSlice,
    filterData: FilterSlice,
    cartData:CartSlice,
    letterBox:LetterBoxSlice,
    headerBookMark:HeaderBookmarkSlice,
    themeCustomizer: ThemeCustomizerSlice,
    addProduct:AddProductSlice,
  },
});

export default Store;

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
