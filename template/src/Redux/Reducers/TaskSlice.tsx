import { AllTaskType, TaskSliceType } from "@/Types/TaskType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: TaskSliceType = {
  allTask: [],
  taskFilter: false,
  validation: false,
  myTask: [],
  addModal: false,
  activeTab: "1",
};

export const fetchTaskApiData = createAsyncThunk<AllTaskType[], void, {}>("/api/taskapi", async () => {
  const response = await axios.get("/api/taskapi");
  return response.data;
});

const TaskSlice = createSlice({
  name: "TaskSlice",
  initialState,
  reducers: {
    setAllTask: (state, action) => {
      state.allTask = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setTaskFilter: (state) => {
      state.taskFilter = !state.taskFilter;
    },
    setValidation: (state, action) => {
      state.validation = action.payload;
    },
    setAddModal: (state) => {
      state.addModal = !state.addModal;
    },
    addNewTask: (state, action) => {
      const taskTemp = {
        id: state.allTask.length + 1,
        title: action.payload.title,
        collection: action.payload.collection,
        description: action.payload.description,
      };
      state.allTask = [...state.allTask, taskTemp];
    },
    setMyTask: (state, action) => {
      state.myTask = [...state.myTask, action.payload];
    },
    removeTask: (state, action) => {
      state.allTask = state.allTask.filter((data) => data.id !== action.payload);
    },
    removeAssignTask: (state, action) => {
      state.myTask = state.myTask.filter((data) => data.id !== action.payload);
    },    
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTaskApiData.fulfilled, (state, action) => {
      state.allTask = action.payload;
    });
  },
});

export const { setActiveTab, setAddModal, setValidation, setMyTask, setAllTask, setTaskFilter, addNewTask, removeTask, removeAssignTask } = TaskSlice.actions;

export default TaskSlice.reducer;
