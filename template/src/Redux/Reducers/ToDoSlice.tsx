import { ToDoProp, ToDoSliceProp } from "@/Types/ToDoType";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState: ToDoSliceProp = {
  showSideBar: false,
  todoList: [],
  task: "",
};


export const fetchTodoApiData = createAsyncThunk<ToDoProp[], void, {}>("/api/todo", async () => {
  const response = await axios.get("/api/todoapi");
  return response.data;
});

const ToDoSlice = createSlice({
  name: "ToDoSlice",
  initialState,
  reducers: {
    setShowSideBar: (state) => {
      state.showSideBar = !state.showSideBar;
    },
    setTask: (state, action) => {
      state.task = action.payload;
    },
    addNewTodo: (state, action) => {
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      const currentDate = new Date();
      const temp = {
        id: state.todoList.length + 1,
        title: action.payload,
        status: "pending",
        badge: "Pending",
        badgeClass: "bg-light-danger text-danger",
        timeLimit: currentDate.getDate() + " " + months[currentDate.getMonth()],
      };
      state.todoList = [temp,...state.todoList];
    },
    removeItems: (state, action) => {
      state.todoList = state.todoList?.filter((data) => data.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const {id,status,badgeClass}=action.payload
      const temp = state.todoList.map(item => {
        if (item.id === id) {
          if (status === 'pending') {
            return { ...item, status, badgeClass: badgeClass, badge: 'Pending' };
          } else if (status === 'completed') {
            return { ...item, status, badgeClass: badgeClass, badge: 'Done' };
          }
        }
        return item;
      });
      state.todoList = temp
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodoApiData.fulfilled, (state, action) => {
      state.todoList = action.payload;
    });
  },
});

export const { setShowSideBar, setTask, addNewTodo, removeItems ,updateTodo} = ToDoSlice.actions;

export default ToDoSlice.reducer;
