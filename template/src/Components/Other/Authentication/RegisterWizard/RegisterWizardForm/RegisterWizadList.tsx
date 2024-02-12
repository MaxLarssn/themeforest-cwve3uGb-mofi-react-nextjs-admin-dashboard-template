import { ImagePath } from "@/Constant";
import { RegisterStepData } from "@/Data/Pages";
import { useAppSelector } from "@/Redux/Hooks";
import { RegisterWizadListProp } from "@/Types/AuthType";
import Link from "next/link";

export const RegisterWizadList:React.FC<RegisterWizadListProp> = ({ level }) => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);

  return (
    <ul className="theme-scrollbar anchor">
      <li>
        <Link className="logo text-start ps-0" href={`/${i18LangStatus}/dashboard/default_dashboard`}>
          <img className="for-light" src={`${ImagePath}/logo/logo.png`} alt="looginpage"  />
          <img className="for-dark" src={`${ImagePath}/logo/logo_dark.png`} alt="looginpage" />
        </Link>
      </li>
      {RegisterStepData.map((data, index) => (
        <li key={index}>
          <Link href={`#step-${index}`} className={`${level === index + 1 ? "selected" : level > index + 1 ? "done" : "disabled"}`}>
            <h4>{index + 1}</h4>
            <h5>
              {data.tittle}
              {data.tittle === "Done" ? <i className="fa fa-thumbs-o-up ms-1" /> : " "}
            </h5>
            <small>{data.detail}</small>
          </Link>
        </li>
      ))}
      <li>
        <img src={`${ImagePath}/login/icon.png`} alt="looginpage" />
      </li>
    </ul>
  );
};
