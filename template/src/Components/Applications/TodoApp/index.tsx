import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { fetchTodoApiData } from "@/Redux/Reducers/ToDoSlice";
import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import LeftSideUser from "./LeftSideUser";
import ToDoApp from "./ToDoApp";

const TodoAppContainer = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodoApiData());
  }, []);

  return (
    <Container fluid className="email-wrap bookmark-wrap todo-wrap">
      <Row>
        <LeftSideUser />
        <ToDoApp />
      </Row>
    </Container>
  );
};

export default TodoAppContainer;
