import { Href, ImagePath, Logout } from "@/Constant";
import { UserProfileData } from "@/Data/Layout";
import { useAppSelector } from "@/Redux/Hooks";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { LogOut } from "react-feather";

export const Profile = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);

  const router = useRouter();
  const LogOutUser = () => {
    Cookies.remove("mofi_token");
    router.push("/auth/login");
  };

  return (
    <li className="profile-nav onhover-dropdown px-0 py-0">
      <div className="d-flex profile-media align-items-center">
        <img className="img-30" src={`${ImagePath}/dashboard/profile.png`} alt="" />
        <div className="flex-grow-1">
          <span>Alen Miller</span>
          <p className="mb-0 font-outfit">
            UI Designer<i className="fa fa-angle-down"></i>
          </p>
        </div>
      </div>
      <ul className="profile-dropdown onhover-show-div">
        {UserProfileData.map((item, index) => (
          <li key={index}>
            <Link href={`/${i18LangStatus}/${item.link}`}>{item.icon}<span>{item.title} </span></Link>
          </li>
        ))}
        <li onClick={LogOutUser}><Link href={Href}scroll={false} ><LogOut /><span>{Logout} </span></Link></li>
      </ul>
    </li>
  );
};
