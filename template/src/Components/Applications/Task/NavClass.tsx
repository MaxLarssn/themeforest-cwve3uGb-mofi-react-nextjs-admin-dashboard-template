import { PlusCircle } from "react-feather";
import { Button, Card, CardBody, Col, Nav, NavItem } from "reactstrap";
import { Href, TaskFilter } from "@/Constant";
import CreateTag from "./CreateTag";
import HeaderProfile from "./HeaderProfile";
import NewTaskClass from "./NewTask";
import { TaskViewData } from "./TaskViewData";
import { TaskTagData } from "./TaskTagData";
import { useCallback, useState } from "react";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { NavClassType } from "@/Types/TaskType";
import { setTaskFilter } from "@/Redux/Reducers/TaskSlice";

const NavClass :React.FC<NavClassType> = ({ activeToggle }) => {
  const [tagModal, setTagModal] = useState(false);
  const { taskFilter} = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();
  const tagCallback = useCallback((modal:boolean) => {setTagModal(modal)}, []);

  return (
    <Col xl="3" className="box-col-4e">
      <div className="md-sidebar">
        <Button tag="a" color="primary" className="md-sidebar-toggle" href={Href} onClick={() => dispatch(setTaskFilter())}>{TaskFilter}</Button>
        <div className={`md-sidebar-aside job-left-aside custom-scrollbar ${taskFilter ? "open" : ""}`}>
          <div className="email-left-aside">
            <Card>
              <CardBody>
                <div className="email-app-sidebar left-bookmark task-sidebar">
                  <HeaderProfile />
                  <Nav className="main-menu">
                    <NavItem><NewTaskClass /></NavItem>
                    <NavItem><span className="main-title">Views</span></NavItem>
                    <TaskViewData activeToggle={activeToggle} />
                    <NavItem><hr /></NavItem>
                    <NavItem>
                      <span className="f-w-700 main-title">Tags
                        <span className="pull-right" onClick={() => {setTagModal(true)}}><PlusCircle /></span>
                      </span>
                    </NavItem>
                    <CreateTag tagCallback={tagCallback} tagModal={tagModal} setTagModal={setTagModal}/>
                    <TaskTagData activeToggle={activeToggle} />
                  </Nav>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default NavClass;
