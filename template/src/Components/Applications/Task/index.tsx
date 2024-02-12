import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import NavClass from "./NavClass";
import { fetchTaskApiData, setActiveTab } from "@/Redux/Reducers/TaskSlice";
import { useAppDispatch } from "@/Redux/Hooks";
import TabClass from "./TabClass";

const TaskContainer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchTaskApiData());
  }, []);
  const activeToggle = (tab: string) => dispatch(setActiveTab(tab));

  return (
    <Container fluid>
      <div className="email-wrap bookmark-wrap">
        <Row>
          <NavClass activeToggle={activeToggle} />
          <TabClass />
        </Row>
      </div>
    </Container>
  );
};

export default TaskContainer;
