import { ProjectListData } from "@/Data/Application/Project";
import { ProjectType } from "@/Types/ProjectType";
import { createSlice } from "@reduxjs/toolkit";

const initialState: ProjectType = {
  activeTab: "1",
  createdFormData: ProjectListData,
};

const ProjectSlice = createSlice({
  name: "SideBarSlice",
  initialState,
  reducers: {
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setCreatedData: (state, action) => {
      state.createdFormData = action.payload;
    },
  },
});
export const { setActiveTab, setCreatedData } = ProjectSlice.actions;

export default ProjectSlice.reducer;
