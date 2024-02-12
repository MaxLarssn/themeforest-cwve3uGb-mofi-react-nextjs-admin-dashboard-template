import { Button, Card, CardBody, Col } from "reactstrap";
import { Href, ToDoFilter } from "@/Constant";
import UserDetail from "./UserDetail";
import { SideBarNavItem } from "./SideBarNavItem";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setShowSideBar } from "@/Redux/Reducers/ToDoSlice";

const LeftSideUser = () => {
  const { showSideBar } = useAppSelector((state) => state.todo);
  const dispatch = useAppDispatch();

  return (
    <Col xxl="3" xl="4" className="box-col-30">
      <div className="email-sidebar md-sidebar">
        <Button color="primary" tag="a" className="email-aside-toggle md-sidebar-toggle" href={Href} onClick={() => dispatch(setShowSideBar())}>{ToDoFilter}</Button>
        <div className={`email-left-aside md-sidebar-aside ${showSideBar ? "open" : ""}`}>
          <Card>
            <CardBody>
              <div className="email-app-sidebar left-bookmark custom-scrollbar">
                <UserDetail />
                <SideBarNavItem />
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};

export default LeftSideUser;
