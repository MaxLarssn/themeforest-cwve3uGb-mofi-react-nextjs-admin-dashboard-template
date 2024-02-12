import { Activity, Cast, CheckCircle } from "react-feather";
import { Badge, NavItem } from "reactstrap";
import { Completed, Href, InProcess, Pending } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";

export const WorkingTabs = () => {
  const { todoList } = useAppSelector((state) => state.todo);

  return (
    <>
      <NavItem>
        <Link href={Href}>
          <span className="iconbg badge-light-success"><CheckCircle className="stroke-success" /></span>
          <span className="title ms-2">{Completed}</span>
          <Badge pill color="success" className="text-white">
            {todoList.filter((data) => data.badge === "Done").length}
          </Badge>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={Href}>
          <span className="iconbg badge-light-danger"><Cast className="stroke-danger" /></span>
        <span className="title ms-2">{Pending}</span>
          <Badge pill color="danger" className="text-white">
            {todoList.filter((data) => data.badge === "Pending").length}
          </Badge>
        </Link>
      </NavItem>
      <NavItem>
        <Link href={Href}>
          <span className="iconbg badge-light-info"><Activity className="stroke-info" /></span>
          <span className="title ms-2">{InProcess}</span>
          <Badge pill color="primary" className="text-white">
            {todoList.filter((data) => data.badge === "In Progress").length}
          </Badge>
        </Link>
      </NavItem>
    </>
  );
};
