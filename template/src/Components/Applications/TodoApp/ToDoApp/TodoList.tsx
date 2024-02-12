import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { removeItems, updateTodo } from "@/Redux/Reducers/ToDoSlice";
import { ToDoProp } from "@/Types/ToDoType";
import { toast } from "react-toastify";
import { Badge } from "reactstrap";

const TodoList = () => {
  const { todoList } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  const handleRemoveTodo = (todoId: number, todo: string) => {
    dispatch(removeItems(todoId));
    toast.success(`${todo} deleted`);
  };

  const handleMarkedTodo = (item: ToDoProp) => {
    if (item.status === "completed") {
      dispatch(updateTodo({ id: item.id, status: "pending", badgeClass: "bg-light-danger text-danger"}));
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      dispatch(updateTodo({ id: item.id, status: "completed", badgeClass: "bg-light-success text-success" }));
      toast.success(item.title + " as Complete");
    }
  };

  return (
    <div className="todo-list-body theme-scrollbar">
      <ul id="todo-list">
        {todoList.length > 0
          ? todoList?.map((todo, index) => (
              <li className={`task ${todo.status === "completed" ? "completed" : ""}`} key={index}>
                <div className="task-container">
                  <h4 className="task-label" onClick={() => handleMarkedTodo(todo)}>{todo.title}</h4>
                  <div className="d-flex align-items-center gap-3">
                    <Badge color="transparent" className={`${todo.badgeClass}`}>{todo.badge}</Badge>
                    <h5 className="assign-name m-0">{todo.timeLimit}</h5>
                    <span className="task-action-btn" onClick={() => handleRemoveTodo(todo.id, todo.title)}>
                      <span className="action-box large delete-btn" title="Delete Task">
                        <i className="icon">
                          <i className="icon-trash"></i>
                        </i>
                      </span>                      
                    </span>
                  </div>
                </div>
              </li>
            ))
          : ""}
      </ul>
    </div>
  );
};
export default TodoList;