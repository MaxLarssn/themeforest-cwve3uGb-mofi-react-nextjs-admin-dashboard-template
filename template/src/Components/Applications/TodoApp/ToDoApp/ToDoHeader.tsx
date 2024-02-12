import React from "react";
import { toast } from "react-toastify";
import { Button, CardHeader, Input, InputGroup } from "reactstrap";
import { AddTask, ToDoPlaceholder } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { addNewTodo, setTask } from "@/Redux/Reducers/ToDoSlice";

export const ToDoHeader = () => {
  const {task} = useAppSelector((state)=>state.todo)
  const dispatch=useAppDispatch()

  const handleNewTask = () => {
    if (task === "") {
      toast.error("please add your todo");
    } else {
      dispatch(addNewTodo(task));
      dispatch(setTask(" "));
      toast.success(`Task add ${task}`);
    }
  };

  const onTaskChanged = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setTask(e.currentTarget.value));
  };

  return (
    <CardHeader>
      <div className="todo-list-header">
        <InputGroup className="new-task-wrapper">
          <Input className="shadow-none" value={task} placeholder={ToDoPlaceholder} id="new-task" onChange={(e)=>onTaskChanged(e)} />
          <Button color="primary" className="add-new-task-btn" onClick={handleNewTask} id="add-task">{AddTask}</Button>
        </InputGroup>
      </div>
    </CardHeader>
  );
};
