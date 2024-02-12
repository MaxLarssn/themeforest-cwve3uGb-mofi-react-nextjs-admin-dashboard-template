import { AlreadyLeaving, ConnectNewRegisterAccount, ImagePath, YesLogOut } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { ToggleModalType } from "@/Types/UikitsType";
import Link from "next/link";
import { Button } from "reactstrap";

export const ToggleChildModal:React.FC<ToggleModalType> = ({toggleAll} ) => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <div className="modal-toggle-wrapper">
      <ul className="modal-img">
        <li className="text-center"><img src={`${ImagePath}/gif/logout.gif`} alt="logout" /></li>
      </ul>
      <h4 className="pt-3 text-center">{AlreadyLeaving}</h4>
      <p className="text-center">Are you sure want to logout this dashboard?</p>
      <span className="d-block text-center mb-4">Not a member?
        <Link className="ms-1" href={`/${i18LangStatus}/dashboard/default_dashboard`}>{ConnectNewRegisterAccount}</Link>
      </span>
      <Button color="dark" className="d-flex m-auto" onClick={toggleAll}>{YesLogOut}</Button>
    </div>
  );
};
