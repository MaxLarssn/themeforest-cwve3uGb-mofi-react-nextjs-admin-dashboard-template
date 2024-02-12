import { Card, CardBody, Col } from "reactstrap";
import { ToDoHeader } from "./ToDoHeader";
import TodoList from "./TodoList";

const ToDoApp = () => {
  return (
    <Col xxl="9" xl="8" className="box-col-12">
      <Card>
        <ToDoHeader />
        <CardBody>
          <div className="todo">
            <div className="todo-list-wrapper theme-scrollbar">
              <div className="todo-list-container">
                <TodoList />
              </div>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ToDoApp;
