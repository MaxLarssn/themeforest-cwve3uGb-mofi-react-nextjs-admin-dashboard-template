import { AddLabelHeading } from "@/Constant";
import { useAppDispatch, useAppSelector } from "@/Redux/Hooks";
import { setModal } from "@/Redux/Reducers/LetterBoxSlice";
import { NavItem, NavLink } from "reactstrap";

const AddLabel = () => {
  const { modal } = useAppSelector((state) => state.letterBox);
  const dispatch = useAppDispatch();

  return (
    <NavItem>
      <NavLink onClick={() => dispatch(setModal(!modal))} className="border-0">
        <i className="fa fa-plus" />
        {AddLabelHeading}
      </NavLink>
    </NavItem>
  );
};

export default AddLabel;
